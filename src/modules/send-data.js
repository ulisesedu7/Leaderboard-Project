// send data to the API
const sendData = async (baseUrl, gameId, scores) => {
  const urlAppend = `${gameId}/scores`;
  const response = await fetch(baseUrl + urlAppend, {
    method: 'POST',
    body: JSON.stringify({
      user: scores.name,
      score: scores.score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const success = await response.json();
  return success;
};

export default sendData;