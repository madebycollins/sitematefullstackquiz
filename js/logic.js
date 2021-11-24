// Create the body instance
let documentBody = document.querySelector('body');

// Create button instance
let clickMeButton = document.querySelector('button.clickMeButton');

// Create button instance
let yesButton = document.querySelector('button.yesButton');

// Create button instance
let cancelButton = document.querySelector('button.cancelButton');

// Create response paragraph instance
let userResponseOutcome = document.querySelector('p.userResponseOutcome');

// Create question instance
let modalQuestion = document.querySelector('p.modalQuestion');

// Create modal body instance
let modalBody = document.querySelector('div.modalBody');

// Handle multiple buttons
function handleButtonClick(event) {

    // Reset the response outcome
    resetResponse();

    // Get the modal question from the button
    const question = event.getAttribute('aria-question');

    // Set the question
    setModalQuestion(question);

    // Show the modal
    activateModalMode();
}

// Add click listener for yesButton button
yesButton.addEventListener('click', function () {
    // Get the response value
    const outcomeValue = yesButton.getAttribute('title');

    // Update the data
    setResponseOutcome(outcomeValue);

    // Reset the modal mode
    deactivateModalMode();
})

// Add click listener for yesButton button
cancelButton.addEventListener('click', function () {
    // Get the response value
    const outcomeValue = cancelButton.getAttribute('title');

    // Update the data
    setResponseOutcome(outcomeValue);

    // Reset the modal mode
    deactivateModalMode();
})

function activateModalMode() {
    // Darken background
    documentBody.className = "modalMode";

    // Disable the button
    document.querySelectorAll('.clickMeButton').forEach(function(button){
        button.setAttribute('disabled', 'disabled');
    });

    // Make the modal visible
    modalBody.className = "modalBody modalVisible";
}

function deactivateModalMode() {

    // Make the modal visible
    modalBody.className = "modalBody";

    // Lighten the background
    documentBody.className = "container";

    // Reactivate the button
    document.querySelectorAll('.clickMeButton').forEach(function(button){
        button.removeAttribute('disabled');
    });
}

function resetResponse() {
    userResponseOutcome.textContent = '';
}

function setResponseOutcome(newContent) {
    userResponseOutcome.textContent = 'You just clicked "' + newContent + '"';
}

function setModalQuestion(question) {
    modalQuestion.textContent = question;
}
