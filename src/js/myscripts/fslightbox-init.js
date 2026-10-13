const popupForm = document.querySelector("#popup-form");
const lightbox = new FsLightbox();

lightbox.props.sources = [popupForm];

document.querySelectorAll(".js-open-popup-form").forEach((button) => {
	button.addEventListener("click", (event) => {
		event.preventDefault();
		lightbox.open();
	});
});