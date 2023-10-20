const link = document.getElementById('translate-en-ru');
let language = localStorage.getItem('currentLanguage') || 'en';

link.addEventListener('click', function (event) 
{
    event.preventDefault();
    language = language === 'en' ? 'ru' : 'en';

    getTranslate();
});

function getTranslate() {
    localStorage.setItem('currentLanguage', language);

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((element) => {
        const translationKey = element.dataset.i18n;

        if (i18n.hasOwnProperty(language) && i18n[language].hasOwnProperty(translationKey)) {
            element.textContent = i18n[language][translationKey];
        }
    });
}

const i18n = {
    'en': 
    {    'lng-menu-home': 'Home',
         'lng-menu-features': 'Features',
         'lng-menu-gallary': 'Gallary',
         'lng-menu-testimonials': 'Testimonials',
         'lng-menu-book': 'Book now',
         'lng-main-serenity': 'Serenity',
         'lng-main-big': 'Stay with us feel like home.',
         'lng-main-text-about': 'Pet-friendly hotels are becoming increasingly popular; appealing to travellers who cant bear to be parted.',
         'lng-main-text-read-more':'Read more',
         'lng-main-footer-check-in':'Cheek in',
         'lng-main-footer-check-in-date': '10 Feb 2021',
         'lng-main-footer-check-out':'Cheek out',
         'lng-main-footer-check-out-date': '13 Feb 2021',
         'lng-main-footer-person': 'Person',
         'lng-main-footer-person-counter' : '2 Adults 1 kid',
         'lng-main-footer-find': 'Find Room',
         'lng-dream-holidays-text': 'dream holidays',
         'lng-dream-enjoy-text': 'Enjoy unforgettable experiences in dream hotels.',
         'lng-dream-view-more-button' : 'View more',
         'lng-why-header-text' : 'Why you choose us!',
         'lng-why-header-naturally-text': 'Naturally, its becoming even more important for hotel and hospitality brands to stand out from the crowd. Content marketing remains a key way for hotels to do this.',
         'lng-why-easy-text': 'Easy booking',
         'lng-why-booking-text': 'The booking process should include minimal steps.',
         'lng-why-item-friendly': 'Friendly interface',
         'lng-why-item-hotel-text': 'A hotel booking engine with a good user-friendly.',
         'lng-why-item-responsibility': 'Responsibility',
         'lng-why-item-shoult-text': 'You should be able to add rooms to your system.',
         'lng-why-item-quick': 'Quick order supply',
         'lng-why-item-booking-text': 'The booking process should include minimal steps.',
         'lng-about-hotel-preview': 'About hotel gallery',
         'lng-about-hotel-text': 'While some of these examples are real - actually offering guests a stay in the locations advertised - it’s mainly just a way',
         'lng-about-hotel-button': 'View more',
         'lng-text-about-room-lux-preview': 'Lux Room',
         'lng-text-about-room-mini-preview': 'Mini Room',
         'lng-text-about-room-stande-preview': 'Stande Room',
         'lng-text-about-room-single-preview':'Single Room',
         'lng-text-about-room-elite-preview': 'Elite Room',
         'lng-text-about-room-cost': 'night',
         'lng-text-about-room-book': 'Book now',
         'lng-feedback-what-text': 'What our client say',
         'lng-feedback-view':'View All',
         'lng-feedback-long-david-text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
         'lng-feedback-david-name':'David Lee',
         'lng-feedback-david-link':'@davidlee',
         'lng-feedback-long-ravi-text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
         'lng-feedback-ravi-name':'Ravi Shankor',
         'lng-feedback-ravi-link':'@ravishankor',
         'lng-feedback-long-thomas-text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
         'lng-feedback-thomas-name':'Thomas Lew',
         'lng-feedback-thomas-link':'@thomaslew',
         'lng-stay-touch': 'STAY IN TOUCH',
         'lng-stay-join-text':'Join our email. First to know about specials,events and more!',
         'lng-stay-enter-email':'Enter your email address',
         'lng-stay-join-subscribe':'Subscribe',
         'lng-footer-travel-text': 'Travel deals on hotels, flights, vacation packages.',
         'lng-footer-travel-email':'@shovasatkhira88.com',
         'lng-footer-menu-home':'Home',
         'lng-footer-menu-accessibility':'Accessibility',
         'lng-footer-menu-vertification':'Vertification',
         'lng-footer-menu-knowledge':'Knowledge',
         'lng-footer-menu-pages':'Pages',
         'lng-footer-menu-blogs':'Blogs',
         'lng-footer-menu-careers':'Careers',
         'lng-footer-menu-communing':'Communing',
         'lng-footer-subscribe-preview': 'SUBSCRIBE'

    },

    'ru':
    {
        'lng-menu-home': 'Главная',
         'lng-menu-features': 'Особенности',
         'lng-menu-gallary': 'Галлерея',
         'lng-menu-testimonials': 'Рекомендации',
         'lng-menu-book': 'Забронировать',
         'lng-main-serenity': 'Безмятежность',
         'lng-main-big': 'Оставайтесь с нами как дома.',
         'lng-main-text-about': 'Отели, где живёшь с питомцем, становятся все более популярными; они привлекательны для тех, кто выносит разлуки.',
         'lng-main-text-read-more':'Подробнее',
         'lng-main-footer-check-in':'Регистрация',
         'lng-main-footer-check-in-date': '10 Фев 2021',
         'lng-main-footer-check-out':'Выселиться',
         'lng-main-footer-check-out-date': '13 Фев 2021',
         'lng-main-footer-person': 'Личности',
         'lng-main-footer-person-counter' : '2 Взр 1 Реб',
         'lng-main-footer-find': 'Найти',
         'lng-dream-holidays-text': 'каникулы мечты',
         'lng-dream-enjoy-text': 'Насладитесь незабываемыми впечатлениями в отелях мечты.',
         'lng-dream-view-more-button' : 'Подробнее',
         'lng-why-header-text' : 'Почему вы выбрали нас!',
         'lng-why-header-naturally-text': 'Естественно, для гостиничных брендов становится еще более важным выделяться из толпы. Контент-маркетинг остается ключевым способом достижения этой цели для отелей.',
         'lng-why-easy-text': 'Бронирование',
         'lng-why-booking-text': 'Бронирование включает минимум шагов.',
         'lng-why-item-friendly': 'Приятный интерфейс',
         'lng-why-item-hotel-text': 'Система бронирования удобна в использовании.',
         'lng-why-item-responsibility': 'Ответственность',
         'lng-why-item-shoult-text': 'Вы можете добавлять комнаты в свою систему.',
         'lng-why-item-quick': 'Быстрая поставка заказа',
         'lng-why-item-booking-text': 'Система бронирования удобна в использовании.',
         'lng-about-hotel-preview': 'О галерее отеля',
         'lng-about-hotel-text': 'Хотя некоторые из этих примеров реальны - фактически предлагая гостям остановиться в рекламируемых местах',
         'lng-about-hotel-button': 'Подробнее',
         'lng-text-about-room-lux-preview': 'Люкс',
         'lng-text-about-room-mini-preview': 'Мини',
         'lng-text-about-room-stande-preview': 'Стандарт',
         'lng-text-about-room-single-preview':'Одиночная',
         'lng-text-about-room-elite-preview': 'Элитная',
         'lng-text-about-room-cost': 'за ночь',
         'lng-text-about-room-book': 'Забронировать сейчас',
         'lng-feedback-what-text': 'Отзывы наших клиентов',
         'lng-feedback-view':'Посмотреть Все',
         'lng-feedback-long-david-text':'Благодарим вас за проявленный интерес к сайту, основному разработчику сайта.',
         'lng-feedback-david-name':'Дэвид Ли',
         'lng-feedback-david-link':'@davidlee',
         'lng-feedback-long-ravi-text':'Благодарим вас за проявленный интерес к сайту, основному разработчику сайта.',
         'lng-feedback-ravi-name':'Рави Шанкор',
         'lng-feedback-ravi-link':'@ravishankor',
         'lng-feedback-long-thomas-text':'Благодарим вас за проявленный интерес к сайту, основному разработчику сайта.',
         'lng-feedback-thomas-name':'Томас Лью',
         'lng-feedback-thomas-link':'@thomaslew',
         'lng-stay-touch': 'ОСТАВАЙТЕСЬ НА СВЯЗИ',
         'lng-stay-join-text':'Присоединяйтесь к нашей электронной почте. Первыми узнавайте о специальных предложениях, мероприятиях и многом другом!',
         'lng-stay-enter-email':'Введите свой Email адрес',
         'lng-stay-join-subscribe':'Подпишитесь',
         'lng-footer-travel-text': 'Туристические предложения по отелям, перелетам, путевкам в отпуск.',
         'lng-footer-travel-email':'@shovasatkhira88.com',
         'lng-footer-menu-home':'Главная',
         'lng-footer-menu-accessibility':'Доступность',
         'lng-footer-menu-vertification':'Верификация',
         'lng-footer-menu-knowledge':'Знания',
         'lng-footer-menu-pages':'Страницы',
         'lng-footer-menu-blogs':'Блоги',
         'lng-footer-menu-careers':'Карьера',
         'lng-footer-menu-communing':'Сообщество',
         'lng-footer-subscribe-preview': 'ПОДПИШИТЕСЬ'


    }
}




