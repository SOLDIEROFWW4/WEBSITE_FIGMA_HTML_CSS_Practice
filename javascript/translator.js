const linkRu = document.getElementById('translate-ru');
const linkEn = document.getElementById('translate-en');
let language = localStorage.getItem('currentLanguage') || 'en';

linkRu.addEventListener('click', function (event) 
{
    event.preventDefault();
    language = language === 'en' ? 'ru' : 'en';

    getTranslate();
});

linkEn.addEventListener('click', function (event) 
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
         'lng-main-text': 'Stay with us feel like',
         'lng-main-text-blue': 'home',
         'lng-main-text-about': 'Pet-friendly hotels are becoming increasingly popular; appealing to travellers who cant bear to be parted.',
         'lng-main-text-read-more':'Read more'
    },

    'ru':
    {
        'lng-menu-home': 'Главная',
         'lng-menu-features': 'Особенности',
         'lng-menu-gallary': 'Галлерея',
         'lng-menu-testimonials': 'Рекомендации',
         'lng-menu-book': 'Забронировать',
         'lng-main-serenity': 'Безмятежность',
         'lng-main-text': 'Оставайтесь с нами как',
         'lng-main-text-blue': 'дома',
         'lng-main-text-about': 'Отели, в которых разрешено проживание с домашними животными, становятся все более популярными; они привлекательны для путешественников, которые не выносят разлуки.',
         'lng-main-text-read-more':'Подробнее'
    }
}




