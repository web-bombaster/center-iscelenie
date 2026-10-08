function guaranteesSliderInit() {
	const guaranteesSlider = document.querySelector('.guarantees-slider');

	if (!guaranteesSlider) {
		return;
	}

	new Swiper(guaranteesSlider, {
		slidesPerView: 1.7,
		spaceBetween: 10,

		breakpoints: {
			600: {
				slidesPerView: 3,
				spaceBetween: 20,
			}
		},
	});
}

guaranteesSliderInit();