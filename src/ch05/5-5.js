const { Observable } = rxjs;

const numbers$ = new Observable(
  function subscribe(observer) {
    let count = 0;
    const clickHandler = function() {
      try {
        observer.next(++count);
      } catch(e) {
        observer.error(e);
      }
    };
    document.addEventListener('click', clickHandler);

    return function() {
      document.removeEventListener('click', clickHandler);
      console.log('unsubscribe');
    };
  }
);

const subscription = numbers$.subscribe(
  x => console.log(x),
  e => console.error(e),
  () => console.log('完了')
);

setTimeout(function() {
  subscription.unsubscribe();
}, 5000);
