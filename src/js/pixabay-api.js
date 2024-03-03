// pixabay-api.js
import { showMessage, renderImages } from './render-functions.js';
import axios from 'axios';

export const fetchImages = async (value, amount, page) => {
    const API_KEY = '42557635-c58ce0ef5400f7d3e989a162c';
    const loader = document.querySelector('.loader');
    const loadMoreBtn = document.getElementById('load-more');

    loader.style.display = 'block';

    try {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${amount}`);
        const data = response.data;
        loadMoreBtn.classList.add('hidden');

        if (data.hits.length === 0) {
            showMessage('Sorry, there are no images matching your search query. Please try again!');
        } else {
            renderImages(data.hits);

            if ((page - 1) * amount + data.hits.length < data.totalHits) {
                loadMoreBtn.classList.remove('hidden');

            } else {
                showMessage("We're sorry, but you've reached the end of search results.");
            }
        }
    } catch (error) {
        console.log(error);
    } finally {
        loader.style.display = 'none';
    }
};
