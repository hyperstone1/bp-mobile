const checkLocal = function () {
  const container = document.querySelector('.container');
  const headerText = document.querySelector('.header');
  const descriptionText = document.querySelectorAll('.description_text');
  (function () {
    if (navigator.language.slice(0, 2) != 'en') {
      container.style.paddingTop = '145px';
      headerText.style.lineHeight = '36px';
      for (const text of descriptionText) {
        text.classList.add('fz_lang');
      }
    }
  })();
};
checkLocal();
export default checkLocal;
