import './css/styles.css';
import { fetchCountry } from './fetchCountries';
import { tooManyMatches, wrongName } from './errors';
import { countryList, countryInfo } from './renderMarkup';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
    searchBox: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};

refs.searchBox.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry() {
  const name = refs.searchBox.value.trim();
  if (name === '') {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';
      return;
  }

  fetchCountry(name)
    .then(countries => {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';
      if (countries.length === 1) {
        refs.countryList.insertAdjacentHTML('afterbegin',countryList(countries));
        refs.countryInfo.insertAdjacentHTML('afterbegin',countryInfo(countries));
      } else if (countries.length > 10) {
        tooManyMatches();
      } else {
        refs.countryList.insertAdjacentHTML('afterbegin',countryList(countries));
      }
    }).catch(wrongName);
}