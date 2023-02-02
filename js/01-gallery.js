import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const links = {
    galleryDiv: document.querySelector(".gallery"),
};

const makeMarkup = galleryItems.map(galleryItem =>
    `<a><img 
    class="gallery__image" 
    src="${galleryItem.preview}" 
    data-source="${galleryItem.original}" 
    alt="${galleryItem.description}"
    ></img></a>`).join('');

links.galleryDiv.insertAdjacentHTML("afterbegin", makeMarkup);

links.galleryDiv.addEventListener("click", callback)

function callback(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return        
    }
    console.log(event.target.nodeName);
    const bigPicture = event.target.dataset.source
    const lightBoxModal = basicLightbox.create(`
    <img src=${bigPicture} width="800" height="600">
`)

    lightBoxModal.show()

    window.addEventListener("keydown", closeByEsc)

    function closeByEsc({ code }) {
        if (code === "Escape") {
            lightBoxModal.close()
        }
    }
}








// const markup = images
//     .map(image => `<li><img class="picture" src=${image.url} width = '400' alt='${image.alt}'></img></li>`)
//     .join('')

// list.insertAdjacentHTML('beforeend', markup)

// const pictures = document.querySelectorAll('.picture')