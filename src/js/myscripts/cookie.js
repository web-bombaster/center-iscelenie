
function initCookieBanner() {
	const cookieBanner = document.querySelector('.cookie');
	const cookieBtnSetting = document.querySelector('.js-cookie-setting-btn');
	const cookieSetting = document.querySelector('.js-cookie-setting');
	const cookieMain = document.querySelector('.js-cookie-main');
	const cookieBack = document.querySelector('.js-cookie-back');

	const btnAcceptAll = document.querySelector('.js-cookie-accept-all');
	const btnAcceptSelected = document.querySelector('.js-cookie-accept-selected');
	const checkboxAnalytics = document.getElementById('cookie-analytics');
	const checkboxFunctional = document.getElementById('cookie-functional');

	const STORAGE_KEY = 'user_cookie_consent';

	// Скрытие баннера
	const hideBanner = () => {
		if (cookieBanner) {
			cookieBanner.classList.remove('is-visible');
		}
	};

	// Сохранение согласия
	const saveConsent = (consentData) => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
		hideBanner();
	};

	// Проверка сохранённого согласия
	const savedConsent = localStorage.getItem(STORAGE_KEY);

	if (!savedConsent && cookieBanner) {
		cookieBanner.classList.add('is-visible');
	}

	// Переход к настройкам
	if (cookieBtnSetting && cookieSetting && cookieMain) {
		cookieBtnSetting.addEventListener('click', () => {
			cookieSetting.classList.add('is-active');
			cookieMain.classList.add('is-hidden');
		});
	}

	// Возврат к основному экрану
	if (cookieBack && cookieSetting && cookieMain) {
		cookieBack.addEventListener('click', () => {
			cookieSetting.classList.remove('is-active');
			cookieMain.classList.remove('is-hidden');
		});
	}

	// Принятие всех cookies
	if (btnAcceptAll) {
		btnAcceptAll.addEventListener('click', () => {
			saveConsent({
				technical: true,
				analytics: true,
				functional: true
			});
		});
	}

	// Принятие выбранных cookies
	if (btnAcceptSelected) {
		btnAcceptSelected.addEventListener('click', () => {
			saveConsent({
				technical: true,
				analytics: checkboxAnalytics ? checkboxAnalytics.checked : false,
				functional: checkboxFunctional ? checkboxFunctional.checked : false
			});
		});
	}
}

// Запуск после загрузки DOM
initCookieBanner();
