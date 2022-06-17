const inputName = document.getElementById('name-input');
const scoreName = document.getElementById('score-input');

const scoresTable = document.getElementById('scores-table');

class StoredScores {
  static addScores(firstName, scoreNumber) {
    const scoreInformation = document.createElement('p');

    scoreInformation.classList.add('score-name');

    scoreInformation.innerHTML = `
    ${firstName}: ${scoreNumber}
    `;
    scoresTable.appendChild(scoreInformation);
  }

  static clearInputs() {
    inputName.value = '';
    scoreName.value = '';
  }

  static clearTable() {
    scoresTable.innerHTML = '';
  }
}

export default StoredScores;