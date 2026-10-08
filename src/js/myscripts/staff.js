function staffSliderInit() {
	const staffSlider = document.querySelector('.staff-slider');

	if (!staffSlider) {
		return;
	}

	new Swiper(staffSlider, {
		slidesPerView: 1.1,
		spaceBetween: 10,
		
		navigation: {
			prevEl: '.staff-slider__prev',
			nextEl: '.staff-slider__next',
		},

		breakpoints: {
			601: {
				slidesPerView: 2.15,
				spaceBetween: 20,
			},
			993: {
				slidesPerView: 3.15,
				spaceBetween: 20,
			},
			1201: {
				slidesPerView: 3.8,
				spaceBetween: 20,
			},
		},
	});
}

staffSliderInit();