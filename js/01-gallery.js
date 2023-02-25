import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function generateGalleryItems(items) {
  return items
    .map(
      ({ preview, original, description }) => `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
      </a>
    </div>
  `
    )
    .join("");
}

gallery.innerHTML = generateGalleryItems(galleryItems);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const clickedElement = event.target;
  if (!clickedElement.classList.contains("gallery__image")) {
    return;
  }

  const modal = basicLightbox.create(`
    <img src="${clickedElement.dataset.source}" alt="${clickedElement.alt}">
  `);

  modal.show();

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      modal.close();
    }
  };
  document.addEventListener("keydown", handleKeyDown);
});
