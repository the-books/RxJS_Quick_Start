const { throwError, of } = rxjs;
const { map } = rxjs.operators;

const numbers$ = of(1, -2, 3)
  .pipe(
    map(number => number < 0 ? throwError('number는 0보다 커야한다.') : number)
  );

numbers$.subscribe(
  x => console.log(x),
  e => console.error(e),
  () => console.log('完了')
);
