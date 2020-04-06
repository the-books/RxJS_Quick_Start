const { Observable } = rxjs;

const numbers$ = Observable.create(
  function subscribe(observer) {
    observer.next("옵");
    observer.next("저");
    observer.next("버");
    observer.next("블");
    observer.next("!");
  }
);

numbers$.subscribe(x => console.log(x));
