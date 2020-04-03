import { idols } from './idols.js';
const { from } = rxjs;
const { filter } = rxjs.operators;

const idols$ = from(idols)
  .pipe(
    filter(idol => idol.height < 160)
  );

const observer = idol => console.log(idol);
idols$.subscribe(observer);
