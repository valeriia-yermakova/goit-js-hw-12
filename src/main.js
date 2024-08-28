import { searchImages } from './js/pixabay-api.js';
import { renderImages, renderMessage } from './js/render-functions.js';

const form = document.querySelector('.gallery-form');
const gallery = document.querySelector('.gallery-list');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');
let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', async event => {
  event.preventDefault();
  gallery.innerHTML = '';
  loadMoreBtn.classList.add('hidden');
  currentPage = 1;
  currentQuery = event.target.elements.query.value.trim();

  if (currentQuery === '') return;

  try {
    const data = await searchImages(currentQuery, currentPage);
    if (data.totalHits === 0) {
      gallery.innerHTML = renderMessage('No images found.');
      return;
    }

    gallery.innerHTML = renderImages(data.hits);
    loadMoreBtn.classList.remove('hidden');
  } catch (error) {
    gallery.innerHTML = renderMessage('Something went wrong. Please try again.');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  loader.classList.add('active');

  try {
    const data = await searchImages(currentQuery, currentPage);
    gallery.innerHTML += renderImages(data.hits);
    loader.classList.remove('active');

    if (data.totalHits <= currentPage * 15) {
      loadMoreBtn.classList.add('hidden');
      gallery.innerHTML += renderMessage("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    gallery.innerHTML += renderMessage('Something went wrong. Please try again.');
    loader.classList.remove('active');
  }
});