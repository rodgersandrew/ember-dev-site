// Get the modal
var modal = document.getElementById('modal');
var modalContent = document.querySelector('.modal-content');

// Get the button that opens the modal
var btn = document.getElementById('projectModalBtn');
var btns = document.querySelectorAll('#projectModalBtn');

// Get the <span> element that closes the modal
var span = document.querySelector('#modalClose');

var modalText = {
  trendr: {
    title: 'Trendr',
    desc: 'Trending Topics Analysis',
    details:
      'Trendr is a react native app which scrapes trending topics from top sites and performs sentiment analysis on those topics allowing users to see sentiment breakdown across sources.'
  },
  wordtrain: {
    title: 'WordTrain',
    desc: 'Speed Word Game',
    details:
      'A word game where the player must enter a valid word starting with the last letter of the previous word. They must battle the game clock and word clock while trying to add complex words in order to get the highest score!'
  }
};

$('#projects button').on('click', function() {
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

  $.each($('#modal .modalSlide'), function(index, value) {
    $(this).css({
      background: `url('./assets/images/slides/${id}-${index +
        1}.png') no-repeat center center/cover`,
      backgroundSize: 'cover'
    });
  });
}
