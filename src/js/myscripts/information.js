function informationSliderInit() {
	const informationSlider = document.querySelector('.information-slider');

	if (!informationSlider) {
		return;
	}

	new Swiper(informationSlider, {
		slidesPerView: 1.7,
		spaceBetween: 10,

		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 0,
			}
		},
	});
}

informationSliderInit();