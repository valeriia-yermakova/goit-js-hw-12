export default async function searchImagesByQuery(query, page) {
    const URL = 'https://pixabay.com/api/';
    const API_KEY = '45506482-0746cd613ccb32219c9653431';
  
    try {
      const response = await fetch(
        `${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`
      );
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
  
      const data = await response.json();
      
      if (data.hits.length === 0) {
        throw new Error('No images found.');
      }
  
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }