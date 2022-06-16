import './style.css';
import StoredScores from './modules/add-scores.js';
import sendData from './modules/send-data.js';
// import receiveInfo from './modules/receive-info.js';

// Base URL from API 
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

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

// Set up Game and ID
const gameId = '2vI2sAbMeXnrTQvulubR'

// Main Event Form
// Get Values
const firstName = inputName.value;
const scoreNumber = scoreName.value;

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get Values
  const firstName = inputName.value;
  const scoreNumber = scoreName.value;

  if (firstName !== '' && scoreNumber !== '') {
    // Instate Score
    const scores = new ScoreInfo(firstName, scoreNumber);

    // Send Data to API
    sendData(baseUrl, gameId, scores);

    // Clear Inputs
    StoredScores.clearInputs();
  }

});

// Receive Data Event 
const receiveInfo = async (baseUrl, gameId) => {
  const urlAppend = `${gameId}/scores`;
  const response = await fetch(baseUrl + urlAppend, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const gamerArray = await response.json();

  return gamerArray;
};

refreshBtn.addEventListener('click', () => {
  receiveInfo(baseUrl, gameId);

  const scoresArray = receiveInfo(baseUrl, gameId);

  console.log(scoresArray);

  for (let i = 0; i < scoresArray.length; i++) {
    StoredScores.addScores(scoresArray.user[i], scoresArray.score[i]);
    
  }

  StoredScores.addScores('Nena', 34);

});
