const { fromEvent } = rxjs;
const { ajax } = rxjs.ajax;
const { map, mergeMap, debounceTime, filter, distinctUntilChanged } = rxjs.operators;

const groups$ = fromEvent(document.getElementById('inputGoup'), 'keyup')
  .pipe(
    debounceTime(500),
    map(event => event.target.value.trim()),
    distinctUntilChanged(),
    filter(query => query.trim().length > 0),
    mergeMap(query => ajax.getJSON(`http://localhost:3000/groups?_embed=idols&groupName_like=${query}`)),
    map(res => res[0]),
  );

groups$.subscribe(group => {
  drawLayer(group.idols)
});

const $layer = document.getElementById('suggestLayer');

function drawLayer(idols) {
  $layer.innerHTML = idols.map(idol => {
    return `
    <div class="col-3 mb-3">
      <div class="card">
        <img src="${idol.image}" class="card-img-top" alt="...">
        <h5 class="card-title">${idol.name}</h5>
        <p class="card-text">${idol.height}cm, ${idol.weight}Kg</p>
      </div>
    </div>`;
  }).join('');
}
