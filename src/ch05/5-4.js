const { Observable } = rxjs;

const numbers$ = Observable.create(
  function subscribe(observer) {
    try {
      observer.next("옵");
      observer.next("저");
      observer.next("버");
      observer.next("블");
      observer.next("!");
      observer.complete('完了');
      observer.next("1");
      observer.next("2");
      observer.next("3");
    } catch(e) {
      observer.error(e);
    }
  }
);

numbers$.subscribe(
  x => console.log(x),
  e => console.error(e),
  () => console.log('完了')
);
