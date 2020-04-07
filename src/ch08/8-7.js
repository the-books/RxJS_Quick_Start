const { fromEvent } = rxjs;
const { ajax } = rxjs.ajax;
const { map, mergeMap } = rxjs.operators;

const groups$ = fromEvent(document.getElementById('inputGoup'), 'keyup')
  .pipe(
    map(event => event.target.value),
    mergeMap(query => ajax.getJSON(`http://localhost:3000/groups?_embed=idols&groupName_like=${query}`)),
  );

groups$.subscribe(value => {
  console.log('서버로 부터 전달 받은 값', value);
});
