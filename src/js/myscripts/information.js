function informationSliderInit() {
	const informationSlider = document.querySelector('.information-slider');

	if (!informationSlider) {
		return;
	}

	new Swiper(informationSlider, {
		slidesPerView: 1.15,
		spaceBetween: 10,

		breakpoints: {
			560: {
				slidesPerView: 2.12,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2.4,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 0,
			}
		},
	});
}

informationSliderInit();