// Єдине місце з адресою сайту. Під домен: SITE_ORIGIN = 'https://example.com.ua', BASE_PATH = ''.
export const SITE_ORIGIN = 'https://innacare.github.io';
export const BASE_PATH = '/psy';

export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;
export const PAGE_URL = `${SITE_URL}/`;

export const withBase = (path: string) => `${BASE_PATH}${path}`;

export const SITE_NAME = 'Інна Ларіна — психолог';
export const PERSON_NAME = 'Інна Ларіна';
export const SITE_TITLE = 'Інна Ларіна — психолог онлайн | КПТ, тривога, депресія, вигорання';
export const SITE_DESCRIPTION =
  'Психолог онлайн Інна Ларіна, магістр клінічної психології. КПТ при тривозі, депресії, вигоранні, РДУГ. Сесія 50 хв у Telegram, Meet, Zoom чи Viber.';

export const LINKS = {
  booking: 'https://forms.gle/sBYDg12JjqXixNGU8',
  payment: 'https://next.privat24.ua/payments/dashboard',
  instagram: 'https://www.instagram.com/innacare.psy/',
  telegram: 'https://t.me/larinna21',
  phone: '+380933076225',
};

export const PRICE = {amount: 1400, currency: 'UAH', minutes: 55};
