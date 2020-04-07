const { fromEvent } = rxjs;
const { ajax } = rxjs.ajax;
const { map, mergeMap, debounceTime, filter, distinctUntilChanged } = rxjs.operators;

const groups$ = fromEvent(document.getElementById('inputGoup'), 'keyup')
  .pipe(
    debounceTime(500),
    map(event => event.target.value.trim()),
    distinctUntilChanged(),
    filter(query => query.trim().length > 0),
    mergeMap(query => ajax.getJSON(`http://localhost:3000/groups?_embed=idols&groupName_like=${query}`)),
  );

groups$.subscribe(value => {
  console.log('서버로 부터 전달 받은 값', value);
});
