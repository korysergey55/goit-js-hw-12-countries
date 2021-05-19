// import './sass/main.scss';
import debounce from 'lodash.debounce';
import {alert, error} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import {endPromise} from './js/api';
import list from './tpl/list.hbs';
import main from './tpl/main.hbs';

const listRef = document.querySelector('.country-list');
const inputRef = document.querySelector('.input');

inputRef.addEventListener('input', debounce(inputChange, 500));

function inputChange(event) {
  const inputRef = event.target.value;
  const inputValue = inputRef.toUpperCase().trim();
  listRef.innerHTML = '';
  if (!inputValue) return;
  endPromise(inputRef)
    .then(user => userCountries(user))
    .catch(error => userCountriesError(error));
}

const userCountriesError = err => {
  error({ text: err });
};

const userCountries = country => {
    if(country.length >= 2 && country.length <= 10){
        const countryElems = list(country);
        listRef.innerHTML = countryElems;
    }
    if(country.length === 1 ){
        const countryElems = main(country);
        listRef.innerHTML = countryElems;
    }
    if(country.length > 10){
      alert ({text: 'error'});
    }
};
