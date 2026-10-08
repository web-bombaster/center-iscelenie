function showMoreInit(selector, visibleItems = 3, showText = 'Показать все', hideText = 'Свернуть') {
	const block = document.querySelector(selector);

	// Если блока нет на странице — ничего не делаем
	if (!block) {
		return;
	}

	const items = Array.from(block.children);

	// Если элементов не больше, чем нужно показать,
	// кнопку создавать не нужно
	if (items.length <= visibleItems) {
		return;
	}

	// Скрываем элементы после visibleItems
	items.forEach((item, index) => {
		if (index >= visibleItems) {
			item.hidden = true;
		}
	});

	// Создаём кнопку
	const button = document.createElement('button');

	button.type = 'button';
	button.classList.add('show-more-button');
	button.textContent = showText;

	// Вставляем кнопку сразу после блока
	block.insertAdjacentElement('afterend', button);

	// Обработчик кнопки
	button.addEventListener('click', () => {
		const isExpanded = button.classList.toggle('is-active');

		items.forEach((item, index) => {
			if (index >= visibleItems) {
				item.hidden = !isExpanded;
			}
		});

		button.textContent = isExpanded ? hideText : showText;
	});
}

showMoreInit('.page-content__box', 3, 'Читать полностью', 'Сверуть');