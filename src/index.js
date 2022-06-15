import './style.css';
import StoredScores from './modules/add-scores.js';

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
  const name = inputName.value;
  const score = scoreName.value;

  if (name !== '' && score !== '') {
    // Instate Score
    const scores = new ScoreInfo(name, score);

    // Add Score to List
    StoredScores.addScores(scores);

    // Clear Inputs
    StoredScores.clearInputs();
  }
});
