import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const markUp = createGalleryCard(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend' , markUp)

function createGalleryCard(items) {
return items.map(({preview, original, description}) => {

    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
}).join('')

};

galleryContainer.addEventListener('click' , onGalleryContainerClick);

function onGalleryContainerClick(evt) {
evt.preventDefault();

const currentImg = evt.target.dataset.source;

if(!currentImg) {
  return;
}
console.log(evt.target)

const instance = basicLightbox.create(`
<img src="${currentImg}"/>`, 
{
  
onShow: (instance) => {
  window.addEventListener('keydown' , onEscKeyPress )
  },

onClose: (instance) => {
window.removeEventListener('keydown' , onEscKeyPress)
},
  
}
);

instance.show();

function onEscKeyPress(event) {
  if(event.code !== 'Escape') return;
  instance.close();
}

}



