const { interval } = rxjs;

const priod$ = interval(1000);

priod$.subscribe(
  x => console.log(x),
  e => console.error(e),
  () => console.log('完了')
);
