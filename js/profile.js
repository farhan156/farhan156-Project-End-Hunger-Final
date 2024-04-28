// Get all steps and output container
const steps = document.querySelectorAll('.step');
const outputContainer = document.getElementById('output-container');

// Initialize current step index and progress value
let currentStep = 0;
updateProgress();

// Function to skip the current step and move to the next one
function skipStep() {
  steps[currentStep].style.display = 'none'; // Hide current step
  currentStep++; // Increment step index
  if (currentStep >= steps.length) {
    displaySummary();
  } else {
    steps[currentStep].style.display = 'block'; // Show next step
    updateProgress(); // Update progress bar
    clearOutput(); // Clear output container
  }
}

// Function to move to the next step and display user input
function nextStep() {
  steps[currentStep].style.display = 'none'; // Hide current step
  currentStep++; // Increment step index

  if (currentStep === 1) { // Display progress bar and value after the first prompt
    document.getElementById('progress-bar').style.display = 'block';
    document.getElementById('progress-value').style.display = 'block';
  }

  if (currentStep >= steps.length) {
    displaySummary();
  } else {
    steps[currentStep].style.display = 'block'; // Show next step
    updateProgress(); // Update progress bar
    clearOutput(); // Clear output container
  }
}

// Function to update the progress bar
function updateProgress() {
  const progress = ((currentStep + 1) / steps.length) * 100; // Calculate progress percentage
  document.getElementById('progress').style.width = `${progress}%`; // Update progress bar width
  document.getElementById('progress-value').textContent = `${Math.round(progress)}% Complete`; // Update progress value display with percentage value
}

// Function to clear the output container
function clearOutput() {
  outputContainer.innerHTML = ''; // Clear output container
}

// Function to display summary at the end
function displaySummary() {
  // Clear output container
  clearOutput();

  // Display prompt questions with answers for each step
  outputContainer.innerHTML = '<h2>Summary</h2>';
  for (let i = 0; i < steps.length; i++) {
    const prompts = steps[i].querySelectorAll('.prompt');
    for (let j = 0; j < prompts.length; j++) {
      const question = prompts[j].querySelector('h3').textContent;
      const answer = prompts[j].querySelector('.response').value;
      outputContainer.innerHTML += `<p><strong>${question}</strong> ${answer}</p>`;
    }
    if (i < steps.length - 1) {
      outputContainer.innerHTML += '<hr>'; // Add horizontal line between steps
    }
  }

  // Show submit button and feedback message
  document.getElementById('submit-button').style.display = 'block';
}

// Function to submit the survey
function submitSurvey() {
  // Clear the body content
  outputContainer.innerHTML = '';

  // Display feedback message
  const feedbackMessage = document.createElement('div');
  feedbackMessage.textContent = '"Thank you for providing your valuable input. We appreciate your contribution!"';
  feedbackMessage.classList.add('feedback-message');
  outputContainer.appendChild(feedbackMessage);

  // Ask if the user wants to submit another response
  const submitAnotherButton = document.createElement('button');
  submitAnotherButton.textContent = 'Submit another response';
  submitAnotherButton.id = 'button-response'; // Assign an ID for styling purposes
  submitAnotherButton.onclick = restartSurvey;
  outputContainer.appendChild(submitAnotherButton);

  // Remove the submit button
  document.getElementById('submit-button').style.display = 'none';
}

// Function to restart the survey
function restartSurvey() {
  currentStep = 0; // Reset current step to the first step
  clearOutput(); // Clear output container

  // Hide the progress bar and progress value
  document.getElementById('progress-bar').style.display = 'none';
  document.getElementById('progress-value').style.display = 'none';

  // Show the first step
  steps[currentStep].style.display = 'block';
}
