import { langs } from './langs';
const changeLang = () => {
  const restore = document.querySelector('.restore');
  const header = document.querySelector('.header');
  const title = document.querySelector('.description_text_title');
  const exportClouds = document.querySelector('.export');
  const textRecognition = document.querySelector('.text_recognition');
  const subscribeTitle = document.querySelector('.subscribe_price_container_title');
  const subscribePrice = document.querySelector('.subscribe_price_container_price');
  const pricePerMonth = document.querySelector('.price_per_month');
  const priceInfo = document.querySelector('.price_info');
  const subscribePriceInfo = document.querySelector('.subscribe_price_container_price_info');
  const titleAnually = document.querySelector('.title_anually');
  const priceInfoAnnualy = document.querySelector('.price_info_annualy');
  const pricePerYear = document.querySelector('.price_per_year');
  const infoAnually = document.querySelector('.info_anually');
  const btn = document.querySelector('.btn');
  const subscribeInfo = document.querySelector('.subscribe_info');
  const terms = document.querySelector('.terms');
  const privacy = document.querySelector('.privacy');

  if (navigator) {
    (async () => {
      console.log(navigator.language.slice(0, 2));
      const lang = navigator.language.slice(0, 2);
      let data = langs.filter((item) => item.lang === lang);
      console.log(data);
      console.log(langs);
      if (history.pushState) {
        var baseUrl =
          window.location.protocol + '//' + window.location.host + window.location.pathname;
        var newUrl = baseUrl + '?lang=' + lang;
        history.pushState(null, null, newUrl);
      } else {
        console.warn('History API не поддерживается');
      }
      restore.textContent = data[0].Restore;
      header.textContent = data[0]['Unlimited Access<br>to All Features'];
      title.textContent = data[0]['Unlimited documents'];
      exportClouds.textContent = data[0].export;
      textRecognition.textContent = data[0]['Text recognition (OCR)'];
      subscribeTitle.textContent = data[0]['Monthly'];
      priceInfo.textContent = data[0]['3 DAYS FREE'];
      if (data[0]['{{price}}/month']) {
        let priceMonth =
          subscribePrice.textContent.slice(0, 5) +
          data[0]['{{price}}/month'].slice(9, data[0]['{{price}}/month'].length);
        subscribePriceInfo.textContent = priceMonth;
      }
      if (data[0]['{{price}}/month']) {
        let priceMonth =
          priceInfoAnnualy.textContent.slice(0, 5) +
          data[0]['{{price}}/month'].slice(9, data[0]['{{price}}/month'].length);
        priceInfoAnnualy.textContent = priceMonth;
      }
      if (data[0]['<strong>{{price}}</strong><br>per month']) {
        let perMonth = data[0]['<strong>{{price}}</strong><br>per month'].slice(
          30,
          data[0]['<strong>{{price}}</strong><br>per month'].length,
        );
        pricePerMonth.textContent = perMonth;
      }
      if (data[0]['<strong>{{price}}</strong><br>per year']) {
        let perYear = data[0]['<strong>{{price}}</strong><br>per year'].slice(
          30,
          data[0]['<strong>{{price}}</strong><br>per year'].length,
        );
        pricePerYear.textContent = perYear;
      }
      titleAnually.textContent = data[0]['Annually'];
      infoAnually.textContent = data[0]['MOST POPULAR'];
      btn.textContent = data[0]['Continue'];
      subscribeInfo.textContent = data[0]['Auto-renewable. Cancel anytime.'];
      terms.textContent = data[0]['Terms of Use'];
      privacy.textContent = data[0]['Privacy Policy'];
    })();
  }
};
changeLang();

module.exports = changeLang;
