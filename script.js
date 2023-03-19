console.log(navigator.language);
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
const discontNumber = document.querySelector('.discont_number');
const titleAnually = document.querySelector('.title_anually');
const priceAnually = document.querySelector('.price_anually');
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
    let data = await (await fetch(`./Localizations/${navigator.language.slice(0, 2)}.json`)).json();
    console.log(data);
    if (history.pushState) {
      var baseUrl =
        window.location.protocol + '//' + window.location.host + window.location.pathname;
      var newUrl = baseUrl + '?lang=' + navigator.language.slice(0, 2);
      history.pushState(null, null, newUrl);
    } else {
      console.warn('History API не поддерживается');
    }
    restore.textContent = data.Restore;
    header.textContent = data['Unlimited Access<br>to All Features'];
    title.textContent = data['Unlimited documents'];
    exportClouds.textContent = data.export;
    textRecognition.textContent = data['Text recognition (OCR)'];
    subscribeTitle.textContent = data['Monthly'];
    priceInfo.textContent = data['3 DAYS FREE'];
    if (data['{{price}}/month']) {
      let priceMonth =
        subscribePrice.textContent.slice(0, 5) +
        data['{{price}}/month'].slice(9, data['{{price}}/month'].length);
      subscribePriceInfo.textContent = priceMonth;
    }
    if (data['{{price}}/month']) {
      let priceMonth =
        priceInfoAnnualy.textContent.slice(0, 5) +
        data['{{price}}/month'].slice(9, data['{{price}}/month'].length);
      priceInfoAnnualy.textContent = priceMonth;
    }
    if (data['<strong>{{price}}</strong><br>per month']) {
      let perMonth = data['<strong>{{price}}</strong><br>per month'].slice(
        30,
        data['<strong>{{price}}</strong><br>per month'].length,
      );
      pricePerMonth.textContent = perMonth;
    }
    if (data['<strong>{{price}}</strong><br>per year']) {
      let perYear = data['<strong>{{price}}</strong><br>per year'].slice(
        30,
        data['<strong>{{price}}</strong><br>per year'].length,
      );
      pricePerYear.textContent = perYear;
    }
    titleAnually.textContent = data['Annually'];
    infoAnually.textContent = data['MOST POPULAR'];
    btn.textContent = data['Continue'];
    subscribeInfo.textContent = data['Auto-renewable. Cancel anytime.'];
    terms.textContent = data['Terms of Use'];
    privacy.textContent = data['Privacy Policy'];
  })();
}
