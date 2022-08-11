import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const imgMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);
// 1)код сверху создание и рендер

galleryContainer.addEventListener('click',onGalleryContainerClick);
    // 2)код сверху реализация делегирования(вешаем клик на один общий контейнер)

function createGalleryItemMarkup(img) {
    return img.map(({preview,original,description}) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                    </a>
                    </div>`;
    }).join('')
    
   }
console.log(createGalleryItemMarkup)

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    // const imageEl = evt.target;
    // if(evt.target.nodeName !== 'IMG') {
    //     return;
    // }
    if (!evt.target.classList.contains("gallery__image")) {
    return;
    };
    setClickImageModal(evt.target);
    
}

const setClickImageModal = (evt) => {
    const onEscPress = (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    };
    const instance = basicLightbox.create(`
<div class="modal">
    <img src="${evt.dataset.source}" width="800" height="600">
    </div>`, {
    
        onShow: (instance) => {
            window.addEventListener("keydown", onEscPress)
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', onEscPress)
        }
        
    })
        instance.show();
};
