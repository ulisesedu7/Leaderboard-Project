const inputName = document.getElementById('name-input');
const scoreName = document.getElementById('score-input');

const scoresTable = document.getElementById('scores-table');

class StoredScores {
  /*
  Here I'd insert a function to display the stored books if there were any stored somewhere
  */

  static addScores(scores) {
    const scoreInformation = document.createElement('p');

    scoreInformation.classList.add('score-name');

    scoreInformation.innerHTML = `
    ${scores.name}: ${scores.score}
    `;
    scoresTable.appendChild(scoreInformation);
  }

  static clearInputs() {
    inputName.value = '';
    scoreName.value = '';
  }
}

export default StoredScores;