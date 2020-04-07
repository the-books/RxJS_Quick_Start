const { from, merge } = rxjs;
const { map, mergeAll } = rxjs.operators;

const numbers$ = from([10, 20, 30, 40, 50]);
const characters$ = from(['A', 'B', 'C', 'D', 'E']);

numbers$.pipe(
  map(v => characters$),
  mergeAll(2),
).subscribe(v => console.log(v));
