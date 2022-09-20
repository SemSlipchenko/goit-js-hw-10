function countryList(countries) {
  const markup = countries.map(({ name, flags }) => {
      return `<li><img src="${flags.svg}" alt="Flag ${name.official}" width = 100px>
                <h2>${name.official}</h2></li>`}).join('');
  return markup;
}

function countryInfo(countries) {
  const markup = countries.map(({ capital, population, languages }) => {
      return `<ul><li><p><b>Capital: </b>${capital}</p></li>
                  <li><p><b>Population: </b>${population}</p></li>
                  <li><p><b>Languages: </b>${Object.values(languages)}</p></li>
              </ul>`}).join('');
  return markup;
}

export { countryList, countryInfo };