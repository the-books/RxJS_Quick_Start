const { Observable } = rxjs;

const numbers$ = new Observable(
  function subscribe(observer) {
    observer.next(1);
    observer.next(2);
    observer.next(4);
    observer.next(8);
    observer.next(16);
  }
);

numbers$.subscribe(x => console.log(x));
