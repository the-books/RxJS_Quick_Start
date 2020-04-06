const { Observable } = rxjs;

const numbers$ = Observable.create(
  function subscribe(observer) {
    try {
      observer.next("옵");
      observer.next("저");
      observer.next("버");
      throw new Error("펑!!!");
      observer.next("블");
      observer.next("!");
    } catch(e) {
      observer.error(e);
    }
  }
);

numbers$.subscribe(
  x => console.log(x),
  e => console.error(e),
);
