const { Observable } = rxjs;
const numbers$ = Observable.create(observer => {
  let id;
  let value = 0;

  try {
    id = setInterval(() => {
      console.log(`is going ${value}`);
      observer.next(value++);
    }, 1000);
  } catch(e) {
    observer.error('error observable');
  }

  return () => {
    clearInterval(id);
    console.log('cancelled');
  }
});

const subscription = numbers$.subscribe(
  x => console.log(`observable value ${x}`),
  e => console.log('error: ', e),
);

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
