import './style.css';
import StoredScores from './modules/add-scores.js';
import createGameId from './modules/new-game.js';
import sendData from './modules/send-data.js';

// Base URL from API 
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const refreshBtn = document.getElementById('refresh-btn');

// Constructor for the object
class ScoreInfo {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

// Form Const and Event Listener
const mainForm = document.getElementById('add-score');
const inputName = document.getElementById('name-input');
const scoreName = document.getElementById('score-input');

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get Values
  const firstName = inputName.value;
  const scoreNumber = scoreName.value;

  if (firstName !== '' && scoreNumber !== '') {
    // Instate Score
    const scores = new ScoreInfo(firstName, scoreNumber);

    // Send Data to API
    sendData(baseUrl);

    // Add Score to List
    StoredScores.addScores(scores);

    // Clear Inputs
    StoredScores.clearInputs();
  }
});
