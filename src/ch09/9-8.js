const { fromEvent } = rxjs;
const { ajax } = rxjs.ajax;
const {
  map,
  // mergeMap,
  // switchAll,
  switchMap,
  debounceTime,
  // filter,
  partition,
  distinctUntilChanged,
  tap,
  // catchError,
  retry,
} = rxjs.operators;

const keyup$ = fromEvent(document.getElementById('inputGoup'), 'keyup')
  .pipe(
    debounceTime(500),
    map(event => event.target.value.trim()),
    distinctUntilChanged(),
  );

const [group$, reset$] = keyup$
  .pipe(
    partition(query => query.trim().length > 0),
  );

reset$
  .pipe(
    tap(cleanLayer),
  )
  .subscribe();

group$
  .pipe(
    tap(showLoading),
    switchMap(query => ajax.getJSON(`http://localhost:3000/groups?_embed=idols&groupName_like=${query}`)),
    map(res => res[0]),
    tap(hideLoading),
    // catchError((e, orgObservable) => {
    //   console.log(`error: ${e.message}`);
    //   return orgObservable;
    // }),
    retry(2),
  )
  .subscribe({
    next: group => {
      drawLayer(group.idols)
    },
    error: e => {
      console.error(e);
      alert(e.message);
    }
  });

const $layer = document.getElementById('suggestLayer');

function cleanLayer() {
  $layer.innerHTML = '';
}

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

const $loading = document.getElementById('loading');

function showLoading() {
  $loading.classList.add('d-block');
}

function hideLoading() {
  $loading.classList.remove('d-block');
}
