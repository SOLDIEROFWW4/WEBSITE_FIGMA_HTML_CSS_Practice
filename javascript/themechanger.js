
const originalColor = 'white';
const newColor = 'grey';

const originalTextColor = 'black';
const newTextColor = 'white';

const originalFeedbackBgColor = '';
const newFeedbackBgColor = '#1b75bb';

const originalImageSrc = './images/main.jpg';
const newImageSrc = './images/other.jpg';

document.addEventListener('DOMContentLoaded', () => {
  const sunElement = document.querySelector('.sun');
  sunElement.addEventListener('click', toggleBackgroundColorImageAndTextColors);
});

function toggleBackgroundColorImageAndTextColors() {
  const body = document.body;
  const imageElement = document.querySelector('.main__img img');
  const textElements = document.querySelectorAll('.main__text, .menu__list .menu__link, .main__about');
  const feedbackItems = document.querySelectorAll('.feedback__item.feedback-item.active');


  body.style.backgroundColor = body.style.backgroundColor === newColor ? originalColor : newColor;

  imageElement.src = imageElement.src.includes('main.jpg') ? newImageSrc : originalImageSrc;

  textElements.forEach(element => {
    element.style.color = element.style.color === newTextColor ? originalTextColor : newTextColor;
  });

  feedbackItems.forEach(item => {
    item.style.backgroundColor = item.style.backgroundColor === newFeedbackBgColor ? originalFeedbackBgColor : newFeedbackBgColor;
  });
}
