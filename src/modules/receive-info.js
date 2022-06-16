// import StoredScores from './add-scores';

// const receiveInfo = async (baseUrl, gameId) => {
//   const urlAppend = `${gameId}/scores`;
//   const response = await fetch(baseUrl + urlAppend, {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });
//   const gamerArray = await response.json();

//   StoredScores.addScores(scores);

//   return gamerArray;
// };

// export default receiveInfo;