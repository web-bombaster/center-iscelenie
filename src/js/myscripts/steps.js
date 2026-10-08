function stepsSliderInit() {
	const stepsSlider = document.querySelector('.steps-slider');

	if (!stepsSlider) {
		return;
	}

	new Swiper(stepsSlider, {
		slidesPerView: 1.1,
		spaceBetween: 10,
		
		navigation: {
			prevEl: '.steps-slider__prev',
			nextEl: '.steps-slider__next',
		},

		breakpoints: {
			721: {
				slidesPerView: 2.15,
				spaceBetween: 20,
			},
			1201: {
				slidesPerView: 3,
				spaceBetween: 20,
			}
		},
	});
}

stepsSliderInit();