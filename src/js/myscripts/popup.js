/**
 * Пример кнопки:
 * button.hero-btn.btn-arrow(data-popup="callback" data-popup-class="popup--callback") Получить
 * data-popup - какую форму открываем
 * data-popup-class - дополнительный класс для попапа
 */


function initPopup() {

    const openButtons = document.querySelectorAll('[data-popup]');
    const popups = document.querySelectorAll('[data-popup-id]');

    let currentPopup = null;
    let currentPopupClass = null;


    // Открытие popup

    function openPopup(popup, popupClass) {

        if (!popup) {
            return;
        }

        // Закрываем предыдущий popup
        if (currentPopup && currentPopup !== popup) {
            closePopup(currentPopup);
        }

        // Удаляем дополнительный класс предыдущего открытия
        if (currentPopupClass && currentPopup === popup) {
            popup.classList.remove(currentPopupClass);
        }

        // Добавляем дополнительный класс
        if (popupClass) {
            popup.classList.add(popupClass);
        }

        popup.classList.add('is-open');
        popup.setAttribute('aria-hidden', 'false');

        currentPopup = popup;
        currentPopupClass = popupClass || null;

        document.documentElement.classList.add('popup-open');
        document.body.classList.add('popup-open');
    }


    // Закрытие popup

    function closePopup(popup) {

        if (!popup) {
            return;
        }

        popup.classList.remove('is-open');
        popup.setAttribute('aria-hidden', 'true');

        // Удаляем дополнительный класс
        if (currentPopup === popup && currentPopupClass) {
            popup.classList.remove(currentPopupClass);
            currentPopupClass = null;
        }

        if (currentPopup === popup) {
            currentPopup = null;
        }

        if (!document.querySelector('.popup.is-open')) {
            document.documentElement.classList.remove('popup-open');
            document.body.classList.remove('popup-open');
        }
    }


    // Кнопки открытия

    openButtons.forEach((button) => {

        button.addEventListener('click', () => {

            const popupId = button.dataset.popup;
            const popupClass = button.dataset.popupClass;

            const popup = document.querySelector(
                `[data-popup-id = "${popupId}"]`
            );

            openPopup(popup, popupClass);
        });

    });


    // Кнопки закрытия

    popups.forEach((popup) => {

        const closeButtons = popup.querySelectorAll('[data-popup-close]');

        closeButtons.forEach((button) => {

            button.addEventListener('click', () => {
                closePopup(popup);
            });

        });

    });


    // Escape

    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape' && currentPopup) {
            closePopup(currentPopup);
        }

    });

}

initPopup();