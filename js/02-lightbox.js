import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imgMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);
// 1)код сверху создание и рендер

galleryContainer.addEventListener('click',onGalleryContainerClick);
    // 2)код сверху реализация делегирования(вешаем клик на один общий контейнер)

function createGalleryItemMarkup(img) {
    return img.map(({preview,original,description}) => {
        return `<div class="gallery__item">
                        <a class="gallery__item" 
                        href="${original}">
                        <img class="gallery__image" 
                        src="${preview}" 
                        alt="${description}" />
                </a>
                    </div>`;
    }).join('')
    
}
   
function onGalleryContainerClick(evt) {
    evt.preventDefault();
    // const imageEl = evt.target;
    // if(evt.target.nodeName !== 'IMG') {
    //     return;
    // }
    if (!evt.target.classList.contains("gallery__image")) {
    return;
    };
    imageModalClick()
}
function imageModalClick() {
     new SimpleLightbox('.gallery a',
        {
            navText: ['<', '>'],
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
        });
// captionsData добавляет текст из даты
// captionPosition положение текста
// captionDelay задержка
// navText Текст или html для навигационных стрелок 
}