const { from, merge } = rxjs;
const { map, } = rxjs.operators;

const numbers$ = from([10, 20, 30, 40, 50]);
const characters$ = from(['A', 'B', 'C', 'D', 'E']);

merge(numbers$, characters$).subscribe(value => {
  console.log(value);
});
