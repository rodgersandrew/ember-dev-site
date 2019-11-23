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
    var $socials = $('');
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

// About Handler
// About -> Header -> Init
const about = document.querySelector('#about');
const aboutHeader = document.querySelector('#aboutHeader');
const aboutTitle = document.querySelector('#aboutTitle');
const aboutRule = document.querySelector('#aboutRule');

// about header component init transparent
aboutTitle.setAttribute('style', 'opacity: 0;');
aboutRule.setAttribute('style', 'opacity: 0;');

// About -> About me -> Init
const headshot = document.querySelector('#headshot');
const aboutMe = document.querySelector('#aboutMe');
headshot.setAttribute('style', 'opacity: 0;');
aboutMe.setAttribute('style', 'opacity: 0;');

// About -> Tech Stack -> Init
const aboutInfo = document.querySelector('#aboutInfo');
const stackRows = document.querySelectorAll('.stackRow');
const stackColumnFirst = document.querySelectorAll('#firstStack');
const stackColumnSecond = document.querySelectorAll('#secondStack');
stackColumnFirst.forEach(row => {
  row.setAttribute('style', 'opacity: 0;');
});
stackColumnSecond.forEach(row => {
  row.setAttribute('style', 'opacity: 0;');
});

// Projects Handler
// Projects -> Header -> Init
const projects = document.querySelector('#projects');
const projectsHeader = document.querySelector('#projectsHeader');
const projectsTitle = document.querySelector('#projectsTitle');
const projectsRule = document.querySelector('#projectsRule');

// projects header component init transparent
projectsTitle.setAttribute('style', 'opacity: 0;');
projectsRule.setAttribute('style', 'opacity: 0;');

// Projects -> Card Containers -> Animation Handling
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

// Animate arrays functions
function animateFirstStack() {
  stackColumnFirst.forEach(row => {
    row.classList.add('animated', 'fadeInRight');
  });
}

function animateSecondStack() {
  stackColumnSecond.forEach(row => {
    row.classList.add('animated', 'fadeInRight');
  });
}

aboutNotVisible = true;
techStackNotVisible = true;
projectsNotVisible = true;
cardsNotVisible = true;

function animateAllComponents() {
  // Navigation on reload
  var $nav = $('#headerNav');
  var $socials = $('');
  var $brand = $('#brandImage');
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

  if (!scrolledHeader && $(this).scrollTop() > $nav.height()) {
    $brand.attr('src', './assets/images/ember-logo-white.png');
    scrolledHeader = true;
  }
  if (scrolledHeader && $(this).scrollTop() < $nav.height()) {
    $brand.attr('src', './assets/images/ember_logo_red.png');
  }

  // About Animation Handling
  if (isInViewport(about) && aboutNotVisible) {
    aboutTitle.classList.add('animated', 'fadeInRight', 'fast');
    aboutRule.classList.add('animated', 'fadeInRightBig');
    aboutNotVisible = false;
  }

  // About -> Stack Rows Animation Handling
  if (isInViewport(aboutInfo) && techStackNotVisible) {
    techStackNotVisible = false;
    aboutMe.classList.add('animated', 'fadeInLeft');
    headshot.classList.add('animated', 'fadeInLeft');
    headshot.addEventListener('animationend', () => {
      headshot.setAttribute('style', 'opacity: 100;');
      headshot.classList.remove('animated', 'fadeInLeft');
    });
    animateFirstStack();
    setTimeout('animateSecondStack();', 200);
  }

  // Projects Animation Handling
  if (isInViewport(projects) && projectsNotVisible) {
    projectsTitle.classList.add('animated', 'fadeInRight', 'fast');
    projectsRule.classList.add('animated', 'fadeInRightBig');
    projectsNotVisible = false;
  }

  // Project Card Animation Handling
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
}
// run animations on scroll if applicable
window.onscroll = () => {
  animateAllComponents();
};

// run animations after reload if applicable
window.onload = () => {
  animateAllComponents();
};
