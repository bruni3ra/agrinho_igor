document.addEventListener('DOMContentLoaded', function () {
  var yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  var button = document.querySelector('.button');
  var target = document.getElementById('valores');
  if (button && target) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  var scrollTopButton = document.getElementById('scrollTop');
  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 320) {
        scrollTopButton.classList.add('visible');
      } else {
        scrollTopButton.classList.remove('visible');
      }
    });
  }
});
