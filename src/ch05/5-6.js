const { of } = rxjs;

const numbers$ = of(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170);

numbers$.subscribe(
  x => console.log(x),
  e => console.error(e),
  () => console.log('完了')
);
