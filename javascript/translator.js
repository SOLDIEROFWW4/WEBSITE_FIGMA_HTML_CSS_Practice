const link = document.getElementById('translate');
let language = localStorage.getItem('currentLanguage') || 'en';

link.addEventListener('click', function (event) 
{
    event.preventDefault();
    language = language === 'en' ? 'ru' : 'en';

    getTranslate();
});

function getTranslate() {
    localStorage.setItem('currentLanguage', language);

    const elements = document.querySelectorAll('[data-langArr]');

    elements.forEach((element) => {
        const translationKey = element.dataset.i18n;

        if (langArr.hasOwnProperty(language) && langArr[language].hasOwnProperty(translationKey)) {
            element.textContent = langArr[language][translationKey];
        }
    });
}




