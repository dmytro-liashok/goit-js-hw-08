// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryListEl = document.querySelector('.gallery');

function createGallery(galleryItems) {
  let srtGalleryHTML = galleryItems
    .map(
      galleryItem =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
                <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
            </a>
        </li>`
    )
    .join('');

  galleryListEl.insertAdjacentHTML('beforeend', srtGalleryHTML);

  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
  });
}

createGallery(galleryItems);
