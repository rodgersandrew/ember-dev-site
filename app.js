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

$(() => {
  $(document).scroll(() => {
    var $nav = $('#headerNav');
    var $brand = $('#brandImage');
    var $pageLinks = $('#page-links');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    console.log($('#about').height());

    if (!scrolledHeader && $(this).scrollTop() > $nav.height()) {
      $brand
        .fadeOut(200, function() {
          $brand.attr('src', './assets/images/ember-logo-white.png');
        })
        .fadeIn(200);
      $pageLinks.attr('style', 'display: flex;');
      $pageLinks.animate({ opacity: 1 }, 700);
      scrolledHeader = true;
    }

    if (scrolledHeader && $(this).scrollTop() < $nav.height()) {
      $brand.attr('src', './assets/images/ember_logo_red.png');
      $pageLinks.animate(
        { opacity: 0 },
        {
          duration: 300,
          complete: () => {
            $pageLinks.attr('style', 'display: none;');
          }
        }
      );
      scrolledHeader = false;
    }
  });
});

// Other Navigation

// Back to Top Footer Button
$('#to-top-btn').click(() => {
  $('html, body').animate({ scrollTop: '0px' }, 700);
});

// Navbar link animations
var linkClicked = false;
$('.section-link').click(function() {
  var anchor = $(this).attr('destination');
  $('nav .active').removeClass('active');

  $('nav')
    .find('[destination="' + anchor + '"]')
    .addClass('active');

  linkClicked = true;
  $('html, body').animate(
    {
      scrollTop: $('#' + anchor).offset().top
    },
    {
      duration: 400,
      complete: () => {
        linkClicked = false;
      }
    }
  );
});

// Apply active class on navbar when scrolling
$(() => {
  $(document).scroll(() => {
    if (!linkClicked) {
      var about = $('#about');
      var portfolio = $('#projects');
      var contact = $('#contact');

      $('nav .active').removeClass('active');
      if ($(this).scrollTop() + 250 > about.offset().top) {
        $('nav .active').removeClass('active');
        $('nav')
          .find('[destination="about"]')
          .addClass('active');
      }

      if ($(this).scrollTop() + 250 > portfolio.offset().top) {
        $('nav .active').removeClass('active');
        $('nav')
          .find('[destination="projects"]')
          .addClass('active');
      }

      if ($(this).scrollTop() + 250 > contact.offset().top) {
        $('nav .active').removeClass('active');
        $('nav')
          .find('[destination="contact"]')
          .addClass('active');
      }
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

// Contact components init
const contact = document.querySelector('#contact');
const contactTitle = document.querySelector('#contactTitle');
const contactRule = document.querySelector('#contactRule');
const contactQuestion = document.querySelector('#contactQuestion');
const contactForm = document.querySelector('#contact-form');
contactTitle.setAttribute('style', 'opacity: 0;');
contactRule.setAttribute('style', 'opacity: 0;');
contactQuestion.setAttribute('style', 'opacity: 0;');
contactForm.setAttribute('style', 'opacity: 0;');

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
contactNotVisible = true;

function animateAllComponents() {
  // Navigation on reload
  var $nav = $('#headerNav');
  var $socials = $('');
  var $brand = $('#brandImage');
  var $pageLinks = $('#page-links');
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

  if (!scrolledHeader && $(this).scrollTop() > $nav.height()) {
    $brand.attr('src', './assets/images/ember-logo-white.png');
    $pageLinks.attr('style', 'display: flex; opacity: 1;');
    scrolledHeader = true;
  }
  if (scrolledHeader && $(this).scrollTop() < $nav.height()) {
    $brand.attr('src', './assets/images/ember_logo_red.png');
    $pageLinks.attr('style', 'display: none; opacity: 0;');
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

  if (isInViewport(contact)) {
    contactTitle.classList.add('animated', 'fadeInRight', 'fast');
    contactRule.classList.add('animated', 'fadeInRightBig');
    contactQuestion.classList.add('animated', 'fadeIn', 'slower');
    contactForm.classList.add('animated', 'fadeIn', 'slower');
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

// Contact Form Handling
window.addEventListener('DOMContentLoaded', function() {
  // get the form elements defined in your form HTML above

  var form = document.getElementById('contact-form');
  var button = document.getElementById('submit');
  var status = document.getElementById('form-status');

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = 'display: none ';
    status.innerHTML = 'Message successfully sent. Thank you!';
  }

  function error() {
    status.innerHTML = 'Oops! There was a problem.';
  }

  // handle the form submission event

  form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
