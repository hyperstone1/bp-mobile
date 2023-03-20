const events = () => {
  let google = 'https://google.com';
  let apple = 'https://apple.com';
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
    console.log(subscribePriceContainer[0]);
    if (subscribePriceContainer[0].classList.contains('active')) {
      location.href = apple;
    } else {
      location.href = google;
    }
  });
};
events()

module.exports = events;
