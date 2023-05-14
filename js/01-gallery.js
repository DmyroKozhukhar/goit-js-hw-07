import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const images = galleryItems
	.map((el) => {
		return `<li class="gallery__item">
    <a 
    class="gallery__link" 
    href="${el.original}" 
    target="_blank">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
        
      />
    </a>
  </li>`;
	})
	.join("");

galleryRef.insertAdjacentHTML("beforeend", images);

galleryRef.addEventListener("click", openImage);
function openImage(evt) {
	evt.preventDefault();
	const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);
	instance.show();

	window.addEventListener("keydown", onEscKeyDown);
	
    function onEscKeyDown(evt) {
		if (evt.code === "Escape") {
			instance.close();
			window.removeEventListener("keydown", onEscKeyDown);
		}
	}
}
