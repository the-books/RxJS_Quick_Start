const { fromFetch } = rxjs.fetch;
const { map } = rxjs.operators;

const data = fromFetch('https://the-girl.github.io/girl-group-json/db.json');

data.subscribe({
  next(response) { response.json().then(res => console.log(res) ) },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
});
