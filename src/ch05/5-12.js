const { from } = rxjs;

const success$ = from(Promise.reject('에러'));

success$.subscribe(
  x => console.log(x),
  e => console.error(e),
  () => console.log('完了')
);
