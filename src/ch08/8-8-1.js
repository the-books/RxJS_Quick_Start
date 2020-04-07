const { of } = rxjs;
const { map, mergeMap, debounceTime, interval } = rxjs.operators;

const numbers$ = of(10, 20, 30, 40, 50);

numbers$.pipe(
  debounceTime(5000),
);

numbers$.subscribe(value => {
  console.log('value: ', value);
});
