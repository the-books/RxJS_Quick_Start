const { from } = rxjs;

const numbers$ = from([1, 2, 3, 4]);

numbers$.subscribe(
  x => console.log(x),
  e => console.error(e),
  () => console.log('完了')
);
