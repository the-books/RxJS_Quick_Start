const { fromEvent } = rxjs;
const btn = document.getElementById('btn');

const click$ = fromEvent(btn, 'click');
click$.subscribe(() => {
  console.log('click RxJS!!!');
});
