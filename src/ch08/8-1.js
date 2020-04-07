const { fromEvent } = rxjs;

const keyup$ = fromEvent(document.getElementById('inputGoup'), 'keyup');

keyup$.subscribe(event => {
  console.log('사용자 입력의 keyboardEvent', event);
});
