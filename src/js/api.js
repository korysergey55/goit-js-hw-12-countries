// const fetchData = (request = '/') => {
//   fetch(JSON_BASE_URL + request).then(response => response.json());
// };

const JSON_BASE_URL = 'https://restcountries.eu/rest/v2';
const userPromise = (userInputInfo) =>
  fetch(`${JSON_BASE_URL}/name/${userInputInfo}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`error ${userInputInfo}`);
  });

export { userPromise };
