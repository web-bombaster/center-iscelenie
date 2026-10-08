function showMoreInit(
	selector,
	visibleItems = 3,
	showText = 'Показать все',
	hideText = 'Свернуть'
) {
	const block = document.querySelector(selector);

	// Если блока нет на странице — ничего не делаем
	if (!block) {
		return;
	}

	const items = Array.from(block.children);

	// Если все элементы уже помещаются в видимую часть,
	// кнопку создавать не нужно
	if (items.length <= visibleItems) {
		return;
	}

	// Скрываем лишние элементы
	items.forEach((item, index) => {
		if (index >= visibleItems) {
			item.classList.add('visually-hidden');
		}
	});

	// Создаём кнопку
	const button = document.createElement('button');

	button.type = 'button';
	button.classList.add('show-more-button');
	button.textContent = showText;

	// Добавляем кнопку после блока
	block.insertAdjacentElement('afterend', button);

	// Обработка клика
	button.addEventListener('click', () => {
		const isExpanded = button.classList.toggle('is-active');

		items.forEach((item, index) => {
			if (index >= visibleItems) {
				item.classList.toggle('visually-hidden', !isExpanded);
			}
		});

		button.textContent = isExpanded ? hideText : showText;
	});
}

showMoreInit('.page-content__box', 3, 'Читать полностью', 'Сверуть');
showMoreInit('.programs-grid', 5, 'Показать больше', 'Сверуть');