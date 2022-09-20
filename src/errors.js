import Notiflix from 'notiflix';
function tooManyMatches() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function wrongName() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

export { tooManyMatches, wrongName };