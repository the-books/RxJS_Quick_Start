const { interval } = rxjs;

const numbers$ = interval(1000);

numbers$.subscribe(x => console.log('first: ', x));

setTimeout(() => {
  numbers$.subscribe(x => console.log('second: ', x));
}, 2000);
