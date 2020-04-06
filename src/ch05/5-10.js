const { from } = rxjs;

const numbers$ = from(new Map([[1, 2], [2, 4], [4, 8]]));

numbers$.subscribe(
  x => console.log(x),
  e => console.error(e),
  () => console.log('完了')
);
