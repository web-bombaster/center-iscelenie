
function phoneMaskInit() {
	const phones = document.querySelectorAll('[name="phone"]');

	phones.forEach((phone) => {
		Inputmask("+7 (999) 999-99-99").mask(phone);
	});
}

phoneMaskInit();