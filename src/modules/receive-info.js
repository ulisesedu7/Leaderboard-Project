import StoredScores from './add-scores.js';

const receiveInfo = async (baseUrl, gameId) => {
  const urlAppend = `${gameId}/scores`;
  const response = await fetch(baseUrl + urlAppend);
  const result = await response.json();

  for (let i = 0; i < result.result.length; i += 1) {
    StoredScores.addScores(result.result[i].user, result.result[i].score);
  }

  return result;
};

export default receiveInfo;