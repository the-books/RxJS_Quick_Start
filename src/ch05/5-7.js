const { range } = rxjs;

range(1, 10)
  .subscribe(
    x => console.log(x),
    e => console.error(e),
    () => console.log('完了')
  );
