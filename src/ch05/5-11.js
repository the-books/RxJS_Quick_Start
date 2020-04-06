const { from } = rxjs;

const success$ = from(Promise.resolve(100));

success$.subscribe(
  x => console.log(x),
  e => console.error(e),
  () => console.log('完了')
);
