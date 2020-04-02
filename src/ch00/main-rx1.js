const { from } = rxjs;
const { map } = rxjs.operators;

const data = from(fetch('https://the-girl.github.io/girl-group-json/db.json'));

data.subscribe({
  next(response) { console.log(response); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
});
