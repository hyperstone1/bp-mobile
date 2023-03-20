import { google, apple } from './constants';

const events = () => {
  const subscribePriceContainer = document.querySelectorAll('.subscribe_price_container ');
  const button = document.querySelector('.btn');
  subscribePriceContainer.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
      subscribePriceContainer.forEach((item, idx) => {
        item.classList.remove('active');
        item.classList.remove('disable');
        if (item === e.currentTarget) {
          e.currentTarget.classList.add('active');
        } else {
          item.classList.add('disable');
        }
      });
    });
  });

  button.addEventListener('click', () => {
    if (subscribePriceContainer[0].classList.contains('active')) {
      location.href = apple;
    } else {
      location.href = google;
    }
  });
};
events();

export default events;
