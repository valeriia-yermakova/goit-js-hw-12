import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import searchImagesByQuery from './js/pixabay-api.js';
import { createImages, clearImages, initLightbox } from './js/render-functions.js';

const form = document.querySelector('.gallery-form');
const input = document.querySelector('.input-for-gallery');
const loader = document.querySelector('.loader');
const galleryList = document.querySelector('.gallery-list');
const loadMoreButton = document.querySelector('.load-more');

let currentPage = 1;
let currentQuery = '';
let lightbox;

form.addEventListener('submit', handleSubmit);
loadMoreButton.addEventListener('click', handleLoadMore);

function handleSubmit(event) {
  event.preventDefault();
  clearImages();
  currentPage = 1;
  currentQuery = input.value.trim();

  if (currentQuery === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Please fill the input',
    });
    return;
  }

  fetchImages(currentQuery, currentPage);
}

function handleLoadMore() {
  fetchImages(currentQuery, ++currentPage);
}

async function fetchImages(query, page) {
  try {
    loader.classList.add('active');
    const data = await searchImagesByQuery(query, page);

    if (data.totalHits === 0) {
      iziToast.error({
        position: 'topRight',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createImages(data);

    if (!lightbox) {
      lightbox = initLightbox();
    } else {
      lightbox.refresh();
    }

    if (page > 1) {
      const { height: cardHeight } = galleryList
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    if (data.hits.length < 15 || page * 15 >= data.totalHits) {
      loadMoreButton.classList.add('hidden');
      iziToast.info({
        position: 'topRight',
        message: 'No more images to load.',
      });
    } else {
      loadMoreButton.classList.remove('hidden');
    }
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: `An error occurred: ${error.message}`,
    });
  } finally {
    loader.classList.remove('active');
  }
}

lightbox = initLightbox();