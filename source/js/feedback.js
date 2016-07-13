var feedbackButton = document.querySelector('.btn--map');
var feedback = document.querySelector('.feedback');
var feedbackClose = feedback.querySelector('.feedback__cross');
var modalOverlay = document.querySelector('.modal-overlay');

feedbackButton.addEventListener('click', function (event) {
    event.preventDefault();
    feedback.classList.add('feedback--show');
    modalOverlay.classList.add('modal-overlay--show');
});

feedbackClose.addEventListener('click', function (event) {
    event.preventDefault();
    feedback.classList.remove('feedback--show');
    modalOverlay.classList.remove('modal-overlay--show');
});