// Viewport visibility control
var isInViewport = function(elem) {
  var bounds = elem.getBoundingClientRect();
  var top = bounds.top;
  console.log(top);
  return (
    top < (window.innerHeight / 2 || document.documentElement.clientHeight / 2)
  );
};

// Projects Handler

// Projects -> Header -> Animation Handling
const projects = document.querySelector('#projects');
projects.setAttribute('style', 'opacity: 0;');
const projectsHeader = document.querySelector('#projectsHeader');
const projectsRule = document.querySelector('#projectsRule');

window.onscroll = () => {
  if (isInViewport(projects)) {
    projects.classList.add('animated', 'fadeIn', 'slower');
  }
};

// projectsHeader.classList.add('animated', 'fadeIn', 'slower');
// projectsRule.classList.add('animated', 'fadeIn', 'slower');

// Projects -> Cards -> Animation Handling
const projectCards = document.querySelectorAll('.projectCard');
projectCards.forEach(cardContainer => {
  const cardImg = cardContainer.getElementsByTagName('img')[0];
  const projectHeader = cardContainer.querySelector('.projectHeader');
  const projectInfoBtn = cardContainer.querySelector('.projectInfoBtn');

  cardContainer.addEventListener('mouseover', () => {
    cardImg.classList.add('animated', 'fadeOut');
    projectHeader.classList.remove('animated', 'fadeOut');
    projectHeader.classList.add('animated', 'fadeIn');
    projectInfoBtn.classList.remove('animated', 'fadeOut');
    projectInfoBtn.classList.add('animated', 'fadeIn');
  });
  cardContainer.addEventListener('mouseout', () => {
    cardImg.classList.remove('animated', 'fadeOut');
    cardImg.classList.add('animated', 'fadeIn');
    projectHeader.classList.remove('animated', 'fadeIn');
    projectHeader.classList.add('animated', 'fadeOut');
    projectInfoBtn.classList.remove('animated', 'fadeIn');
    projectInfoBtn.classList.add('animated', 'fadeOut');
  });
});
