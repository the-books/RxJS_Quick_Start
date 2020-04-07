const { from } = rxjs;

const request$ = from(
  fetch('http://localhost:3000/groups?_embed=idols&groupName_like=%EB%A0%88%EB%93%9C').then(res => res.json())
);

request$.subscribe(json => {
  console.log('서버로 부터 전달 받은 값', json);
});

