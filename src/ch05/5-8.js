const { fromEvent } = rxjs;

const click$ = fromEvent(document, 'click')

click$.subscribe(
  x => console.log('click!'),
  e => console.error(e),
  () => console.log('完了')
);
