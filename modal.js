// Get the modal
var modal = document.getElementById('modal');
var modalContent = document.querySelector('.modal-content');

// Get the button that opens the modal
var btn = document.getElementById('projectModalBtn');
var btns = document.querySelectorAll('#projectModalBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

var modalText = {
  trendr: {
    title: 'Trendr',
    desc: 'Trending Topics Analysis',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla magni nostrum eveniet omnis iste!'
  },
  wordtrain: {
    title: 'WordTrain',
    desc: 'Speed Word Game',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla magni nostrum eveniet omnis iste!'
  },
  yelpcamp: {
    title: 'YelpCamp',
    desc: 'Project: Campground Reviews',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla magni nostrum eveniet omnis iste!'
  }
};

$('#projects button').on('click', function() {
  console.log('project button clicked' + this.id);
  loadModal(this.id);
  modal.style.display = 'block';
  modalContent.classList.add('animated', 'zoomIn');
});

// When the user clicks the button, open the modal
// btn.onclick = function() {};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function loadModal(id) {
  $('#modal .title').text(modalText[id].title);
  console.log($('#modal .title'));
  $('#modal .desc').text(modalText[id].desc);
  $('#modal .details').text(modalText[id].details);
}
