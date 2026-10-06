function footerMenuToggle() {
	const footerTitles = document.querySelectorAll('.footer-bl__title');

	if (!footerTitles.length) return;

	footerTitles.forEach((title) => {
		title.addEventListener('click', (e) => {
			
			if (window.innerWidth <= 992) {
				e.preventDefault();
				title.classList.toggle('toggle');
			}
		});
	});
}

footerMenuToggle();