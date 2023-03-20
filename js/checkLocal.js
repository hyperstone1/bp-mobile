const container = document.querySelector('.container');
const headerText = document.querySelector('.header');
const descriptionText = document.querySelectorAll('.description_text');

if (navigator.language.slice(0, 2) != 'en') {
  container.style.paddingTop = '145px';
  header.style.lineHeight = '36px';
  for (const text of descriptionText) {
    text.classList.add('fz_lang');
  }
}
