import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const showMessage = (message) => {
    iziToast.error({
      title: 'Error',
      message,
      position: 'topRight',
    });
};


export const renderImages = (images) => {
    const gallery = new SimpleLightbox('.gallery a', {
        disableScroll: false,
        overlayOpacity: .8,
        captions: true,
        captionsData: 'alt',
        captionDelay: 250 
    });
    const galleryContainer = document.querySelector('.gallery');
    let imageHtml = '';


    images.forEach((image) => {
       imageHtml += `
        <li>
                <a href="${image.largeImageURL}">
                    <img src="${image.webformatURL}" alt="${image.tags}">
                    <div class="image-info">
                        <p>Likes: ${image.likes}</p>
                        <p>Views: ${image.views}</p>
                        <p>Comments: ${image.comments}</p>
                        <p>Downloads: ${image.downloads}</p>
                    </div>
                </a>
            </li>
        `
    });
    galleryContainer.innerHTML += imageHtml;
    gallery.refresh();
}