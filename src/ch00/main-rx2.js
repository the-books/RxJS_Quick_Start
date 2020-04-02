const { ajax } = rxjs.ajax;
const { map } = rxjs.operators;

const data = ajax('https://the-girl.github.io/girl-group-json/db.json');

data.subscribe({
  next(res) { console.log(res.response); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
});
