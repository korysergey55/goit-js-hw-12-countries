// import './sass/main.scss';
import debounce from 'lodash.debounce';
import {alert, error} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import {userPromise} from './js/api';
import countriesListHbs from './tpl/countriesList.hbs';
import mainCountriesHbs from './tpl/mainCountries.hbs';

const containerForListRef = document.querySelector('.country-list');
const userInputRef = document.querySelector('.input');

userInputRef.addEventListener('input', debounce(inputChange, 500));

function inputChange(event) {
  const userInput = event.target.value;
  const inputValue = userInput.toUpperCase().trim();
  containerForListRef.innerHTML = '';
  if (!inputValue) return;
  userPromise(inputValue)
    .then(countryForPrint => printCountry(countryForPrint))
    .catch(error => printCountryError(error));
}

const printCountry = country => {
    if(country.length >= 2 && country.length <= 10){
        const countryElems = countriesListHbs(country);
        containerForListRef.innerHTML = countryElems;
    }
    if(country.length === 1 ){
        const countryElems = mainCountriesHbs(country);
        containerForListRef.innerHTML = countryElems;
    }
    if(country.length > 10){
      alert ({text: 'error'});
    }
};

const printCountryError = err => {
  error({ text: 'Enter real country please' });
};
