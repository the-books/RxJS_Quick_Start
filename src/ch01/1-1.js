let result;
let url = 'https://the-girl.github.io/girl-group-json/db.json';

const xhr = new XMLHttpRequest();

xhr.onload = function(e) {
  result = JSON.parse(xhr.responseText);
  console.log(result);

  Array.from(document.querySelectorAll("li")).forEach((v, i) => {
    v.innerText = result.groups[i].groupName;
  });
};

xhr.open('GET', url);
xhr.send();
