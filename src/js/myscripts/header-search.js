function initHeaderSearch() {
	const header = document.querySelector('.header-bottom');
	const openBtn = document.querySelector('.header-bottom__search');
	const form = document.querySelector('.header-search');
	const closeBtn = document.querySelector('.header-search__close');
	const input = form ? form.querySelector('.header-search__input') : null;
	const suggestions = form
		? Array.from(form.querySelectorAll('.header-search__link')).map((link) => ({
				link,
				text: link.textContent.trim(),
		  }))
		: [];

	if (!header || !openBtn || !form || !closeBtn) return;

	// Подсвечивает в подсказках фрагмент, совпадающий с введённым значением
	function highlightSuggestions(query) {
		const value = query.trim().toLowerCase();

		suggestions.forEach(({ link, text }) => {
			const index = value ? text.toLowerCase().indexOf(value) : -1;

			if (index === -1) {
				link.textContent = text;
				return;
			}

			const match = document.createElement('mark');
			match.className = 'header-search__match';
			match.textContent = text.slice(index, index + value.length);

			link.replaceChildren(
				text.slice(0, index),
				match,
				text.slice(index + value.length)
			);
		});
	}

	function openSearch() {
		header.classList.add('is-search-open');
		openBtn.setAttribute('aria-expanded', 'true');

		if (input) {
			highlightSuggestions(input.value);
			input.focus();
		}
	}

	function closeSearch() {
		header.classList.remove('is-search-open');
		openBtn.setAttribute('aria-expanded', 'false');
		openBtn.focus();
	}

	openBtn.addEventListener('click', openSearch);

	closeBtn.addEventListener('click', closeSearch);

	if (input) {
		input.addEventListener('input', () => highlightSuggestions(input.value));
	}

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && header.classList.contains('is-search-open')) {
			closeSearch();
		}
	});

	document.addEventListener('click', (e) => {
		if (!header.classList.contains('is-search-open')) return;
		if (header.contains(e.target)) return;

		closeSearch();
	});
}

initHeaderSearch();
