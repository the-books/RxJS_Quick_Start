const { Observable } = rxjs;
const numbers$ = Observable.create(observer => {
  console.log('create observable');
  try {
    observer.next(1);
  } catch(e) {
    observer.error('error observable');
  } finally {
    observer.complete();
  }
});

numbers$.subscribe(
  x => console.log('first: ', x),
  e => console.log('first: ', e),
);

numbers$.subscribe(
  x => console.log('second: ', x),
  e => console.log('second: ', e),
);
