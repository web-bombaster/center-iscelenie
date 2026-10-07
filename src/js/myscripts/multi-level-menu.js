function subMenuToggle() {
	const mobileMenuWrapper = document.querySelector('.mob-menu-wrapper');

	if (!mobileMenuWrapper) return;

	let zIndexValue = 100;

	mobileMenuWrapper.addEventListener('click', (e) => {
		const subBtn = e.target.closest(
			'.menu__item--has-submenu > .menu-link-btn'
		);

		if (!subBtn) return;

		e.preventDefault();

		const parentItem = subBtn.closest('.menu__item--has-submenu');
		const subMenu = parentItem?.querySelector(':scope > .menu__submenu');

		if (!subMenu) return;

		const link = parentItem.querySelector(':scope > .menu__link');
		if (!link) return;

		zIndexValue++;

		// Панель
		const panel = document.createElement('div');
		panel.className = 'submenu-panel';
		panel.style.zIndex = zIndexValue;

		// Кнопка "назад"
		const backButton = document.createElement('button');
		backButton.className = 'submenu__header menu__link';
		backButton.type = 'button';

		const arrow = document.createElement('span');
		arrow.className = 'menu-link-btn';

		backButton.append(
			arrow,
			document.createTextNode(link.textContent.trim())
		);

		// Подменю
		const clonedSubMenu = subMenu.cloneNode(true);

		panel.append(backButton, clonedSubMenu);
		mobileMenuWrapper.append(panel);

		// Открываем
		requestAnimationFrame(() => {
			panel.classList.add('active');
		});

		// Закрываем
		backButton.addEventListener('click', () => {
			panel.classList.remove('active');

			panel.addEventListener(
				'transitionend',
				() => panel.remove(),
				{ once: true }
			);
		});
	});
}

subMenuToggle();