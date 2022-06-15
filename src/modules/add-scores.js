const inputName = document.getElementById('name-input');
const scoreName = document.getElementById('score-input');

const scoresTable = document.getElementById('scores-table');

class StoredScores {
  static displayScores () {

  }

  static addScores(scores) {
    const scoreInformation = document.createElement('p');
    
    scoreInformation.classList.add('score-name');

    scoreInformation.innerHTML = `
    ${scores.name}: ${scores.score}
    `
    scoresTable.appendChild(scoreInformation);
  }

  static clearInputs() {
    inputName.value = '';
    scoreName.value = '';
  }
}