const { fromEvent } = rxjs;
const { map } = rxjs.operators;

const keyup$ = fromEvent(document.getElementById('inputGoup'), 'keyup')
  .pipe(
    map(event => event.target.value),
  );

keyup$.subscribe(value => {
  console.log('input에 입력된 값', value);
});
