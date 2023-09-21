const select = document.querySelector('select');
const allLanguages = ['EN','RU'];

select.addEventListener('select__item', changeURLLanguage);

function changeURLLanguage()
{
    let language = select.value;
    location.href = window.location.pathname + '#' + language;
    location.reload();
}

function changeLanguage()
{
    let hash = window.location.hash;
    if (!allLanguages.includes(hash))
    {
        location.href = window.location.pathname + '#en' + language;
        location.reload();
    }
    select.value = hash;
    document.querySelector('menu-home').innerHTML = langArr['home'][hash];

    for (let key in langArr)
    {
        let element = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();
