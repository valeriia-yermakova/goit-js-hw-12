export function renderImages(images) {
    return images
      .map(
        ({ webformatURL, tags, likes, views, comments, downloads }) => `
        <div class="image-frame">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" class="image" />
          <div class="text-block">
            <p>Likes: ${likes}</p>
            <p>Views: ${views}</p>
            <p>Comments: ${comments}</p>
            <p>Downloads: ${downloads}</p>
          </div>
        </div>`
      )
      .join('');
  }
  
  export function renderMessage(message) {
    return `<p class="message">${message}</p>`;
  }