// Viewport visibility control
var isInViewport = function(elem) {
  var bounds = elem.getBoundingClientRect();
  var top = bounds.top;
  return (
    top <
    (window.innerHeight / 1.5 || document.documentElement.clientHeight / 1.5)
  );
};

// Navbar
var scrolledHeader = false;

$(function() {
  $(document).scroll(function() {
    var $nav = $('#headerNav');
    var $socials = $('')
    var $brand = $('#brandImage');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    if (!scrolledHeader && $(this).scrollTop() > $nav.height()) {
      $brand
        .fadeOut(200, function() {
          $brand.attr('src', './assets/images/ember-logo-white.png');
        })
        .fadeIn(200);
      scrolledHeader = true;
    }

    if (scrolledHeader && $(this).scrollTop() < $nav.height()) {
      $brand.attr('src', './assets/images/ember_logo_red.png');
      scrolledHeader = false;
    }
  });
});

// Projects Handler

// Projects -> Header -> Animation Handling
const projects = document.querySelector('#projects');
const projectsHeader = document.querySelector('#projectsHeader');

const projectsTitle = document.querySelector('#projectsTitle');
projectsTitle.setAttribute('style', 'opacity: 0;');
const projectsRule = document.querySelector('#projectsRule');
projectsRule.setAttribute('style', 'opacity: 0;');

// Projects -> Cards -> Animation Handling
const projectCards = document.querySelectorAll('.projectCard');

projectCards.forEach(cardContainer => {
  cardContainer.setAttribute('style', 'opacity: 0;');
  const cardImg = cardContainer.getElementsByTagName('img')[0];
  const projectHeader = cardContainer.querySelector('.projectHeader');
  const projectInfoBtn = cardContainer.querySelector('.projectInfoBtn');

  cardContainer.addEventListener('mouseover', () => {
    cardImg.classList.add('animated', 'fadeOut', 'fast');
    projectHeader.classList.remove('animated', 'fadeOutUp');
    projectHeader.classList.add('animated', 'fadeInDown');
    projectInfoBtn.classList.remove('animated', 'fadeOutDown');
    projectInfoBtn.classList.add('animated', 'fadeInUp');
  });
  cardContainer.addEventListener('mouseout', () => {
    cardImg.classList.remove('animated', 'fadeOut', 'fast');
    cardImg.classList.add('animated', 'fadeIn', 'fast');
    projectHeader.classList.remove('animated', 'fadeInDown');
    projectHeader.classList.add('animated', 'fadeOutUp');
    projectInfoBtn.classList.remove('animated', 'fadeInUp');
    projectInfoBtn.classList.add('animated', 'fadeOutDown');
  });
});

projectsNotVisible = true;
cardsNotVisible = true;
window.onscroll = () => {
  if (isInViewport(projects) && projectsNotVisible) {
    projectsTitle.classList.add('animated', 'fadeInRight', 'fast');
    projectsRule.classList.add('animated', 'fadeInRightBig');
    projectsNotVisible = false;
  }
  if (isInViewport(projectCards[0]) && cardsNotVisible) {
    var counter = 0;
    var i = setInterval(function() {
      projectCards[counter].classList.add('animated', 'fadeInUp');

      counter++;
      if (counter === projectCards.length) {
        cardsNotVisible = false;
        clearInterval(i);
      }
    }, 100);
  }
};
