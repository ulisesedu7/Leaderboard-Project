const newGame = { 
	name: 'Dragon Quest XV: The Untold Story of Zenithia',
};

const createGameId = async (baseUrl) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(newGame),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const gameTitle = document.getElementById('game-title');
  gameTitle.innerHTML = text.result;

  const apiD = await response.json();
  return apiD;
};

export default createGameId;
