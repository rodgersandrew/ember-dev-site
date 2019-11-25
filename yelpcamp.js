// Viewport visibility control
var isInViewport = function(elem) {
  var bounds = elem.getBoundingClientRect();
  var top = bounds.top;
  return (
    top <
    (window.innerHeight / 1.1 || document.documentElement.clientHeight / 1.5)
  );
};

console.log(window.innerHeight / 1.5);

// Set Scrolled brand style by default
var $brand = $('#brandImage');
$brand.attr('src', './assets/images/ember-logo-white.png');

// Animate gallery components
const imgs = document.querySelectorAll('.gallery');
imgs.forEach(img => {
  img.setAttribute('style', 'opacity: 0;');
});

// init stack icons
const stackIcons = document.querySelectorAll('.stackPiece');
stackIcons.forEach(icon => {
  icon.setAttribute('style', 'opacity: 0;');
});

// init description
const header = document.querySelector('.projectHeader');
const details = document.querySelector('#details');
header.setAttribute('style', 'opacity: 0;');
details.setAttribute('style', 'opacity: 0;');

function animateDetails() {
  header.classList.add('animated', 'fadeIn', 'slower');
  details.classList.add('animated', 'fadeIn', 'slower');
}

function animateStackIcons() {
  var counter = 0;
  var i = setInterval(function() {
    stackIcons[counter].classList.add('animated', 'fadeIn');

    counter++;
    if (counter === projectCards.length) {
      cardsNotVisible = false;
      clearInterval(i);
    }
  }, 100);
}

function animateGallery() {
  imgs.forEach(img => {
    if (isInViewport(img)) {
      img.classList.add('animated', 'fadeInUp');
    }
  });
}

window.onscroll = () => {
  animateGallery();
};

window.onload = () => {
  animateDetails();
  animateStackIcons();
  animateGallery();
};
