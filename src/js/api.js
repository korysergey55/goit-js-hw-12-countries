const JSON_BASE_URL = 'https://restcountries.eu/rest/v2';

const fetchData = (request = '/') => {
  fetch(JSON_BASE_URL + request).then(response => response.json());
};

const endPromise = name =>
  fetch(`${JSON_BASE_URL}/name/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`error ${name}`);
  });
  
 export {endPromise};