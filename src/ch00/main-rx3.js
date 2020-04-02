const { ajax } = rxjs.ajax;
const { map } = rxjs.operators;

const data = ajax.getJSON('https://the-girl.github.io/girl-group-json/db.json');

data.subscribe({
  next(response) { console.log(response); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
});
