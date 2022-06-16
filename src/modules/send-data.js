// send data to the API
const sendData = async (baseUrl) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: firstName,
      score: score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const success = await response.json();
  return success;
};

export default sendData;