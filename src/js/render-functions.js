import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function createImages(data) {
  const list = document.querySelector('.gallery-list');
  const images = data.hits
    .map(
      hit => `
        <div class="image-frame">
          <a href="${hit.largeImageURL}">
            <img class="image" src="${hit.webformatURL}" alt="${hit.tags}" />
          </a>
          <div class="text-wrapper">
            <div class="text-block">
              <h5>Likes</h5><p>${hit.likes}</p>
            </div>
            <div class="text-block">
              <h5>Views</h5><p>${hit.views}</p>
            </div>
            <div class="text-block">
              <h5>Comments</h5><p>${hit.comments}</p>
            </div>
            <div class="text-block">
              <h5>Downloads</h5><p>${hit.downloads}</p>
            </div>
          </div>
        </div>`
    )
    .join('');
  
  list.insertAdjacentHTML('beforeend', images);
  lightbox.refresh();
}

export function clearImages() {
  const list = document.querySelector('.gallery-list');
  list.innerHTML = '';
}

export function initLightbox() {
  lightbox = new SimpleLightbox('.gallery-list a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  return lightbox;
}