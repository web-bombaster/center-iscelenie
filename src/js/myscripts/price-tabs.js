function initPriceTabs() {
	const root = document.querySelector('.price-tabs');

	if (!root) return;

	const nav = root.querySelector('.price-tabs__nav');
	const buttons = Array.from(root.querySelectorAll('.price-tabs__btn'));
	const panels = Array.from(root.querySelectorAll('.price-tabs__panel'));

	if (!nav || !buttons.length || !panels.length) return;

	function activate(name, focus = false) {
		buttons.forEach((btn) => {
			const isActive = btn.dataset.tab === name;

			btn.classList.toggle('is-active', isActive);
			btn.setAttribute('aria-selected', String(isActive));
			btn.tabIndex = isActive ? 0 : -1;

			if (isActive && focus) {
				btn.focus();
			}
		});

		panels.forEach((panel) => {
			const isActive = panel.dataset.tabPanel === name;

			panel.classList.toggle('is-active', isActive);
			panel.setAttribute('aria-hidden', String(!isActive));
		});
	}

	buttons.forEach((btn) => {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('is-active')) return;

			activate(btn.dataset.tab);
		});
	});

	nav.addEventListener('keydown', (e) => {
		const currentIndex = buttons.indexOf(document.activeElement);

		if (currentIndex === -1) return;

		let nextIndex = null;

		if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
			nextIndex = (currentIndex + 1) % buttons.length;
		} else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
			nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
		} else if (e.key === 'Home') {
			nextIndex = 0;
		} else if (e.key === 'End') {
			nextIndex = buttons.length - 1;
		}

		if (nextIndex === null) return;

		e.preventDefault();
		activate(buttons[nextIndex].dataset.tab, true);
	});
}

initPriceTabs();
