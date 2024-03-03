import { showMessage } from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loadMore = document.getElementById('load-more');

let current_page;
let current_query;

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const value = searchInput.value.trim();
    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.innerHTML = '';

    current_query = value;
    current_page = 1;

    if (current_query === '') {
        showMessage('Please enter a search query');
        loadMore.classList.add('hidden');
        return;
    }

    try {
        await fetchImages(current_query, 15, current_page);
    } catch (error) {
        console.log(error);
    }
});

loadMore.addEventListener('click', async (event) => {
    event.preventDefault();
    current_page++;

    try {
        await fetchImages(current_query, 15, current_page);
        const cardHeight = document.querySelector('.gallery li').getBoundingClientRect().height;

        window.scrollBy({
            top: (cardHeight + 60) * 2,
            behavior: 'smooth'
        });
    } catch (error) {
        console.log(error);
    }

    
});
