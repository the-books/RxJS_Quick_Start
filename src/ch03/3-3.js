fetch('https://the-girl.github.io/girl-group-json/db.json').then(res => {
  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error('Error');
  }
}).then(jsonData => {
  document.getElementById('idols').innerHTML = process(jsonData.idols);
}).catch(e => {
  console.log(e);
});

function process(people) {
  return people
    .filter(idol => idol.height && idol.weight)
    .map(idol => Object.assign(
      idol,
      logic(idol.height, idol.weight),
    ))
    .reduce((acc, idol) => {
      acc.push(makeHtml(idol));
      return acc;
    }, [])
    .join('');
}

function logic(height, weight) {
  const broca = ((height - 100) * 0.9).toFixed(2);
  const bmi = (height / 100 * height / 100 * 21).toFixed(2);

  const obesityUsingBroca = ((weight - broca) / broca * 100).toFixed(2);
  const obesityUsingBmi = ((weight - bmi) / bmi * 100).toFixed(2);

  return {
    broca,
    bmi,
    obesityUsingBroca,
    obesityUsingBmi,
  }
}

function makeHtml(idol) {
  return `<li>
    <dl>
      <dt>${idol.name}</dt>
      <dd>키: ${idol.height}</dd>
      <dd>몸무게: ${idol.weight}</dd>
      <dd>BROCA 표준체중: ${idol.broca}</dd>
      <dd>BROCA 비만도: ${idol.obesityUsingBroca}</dd>
      <dd>BMI 표준체중: ${idol.bmi}</dd>
      <dd>BMI 비만도: ${idol.obesityUsingBmi}</dd>
    </dl>
  </li>`;
}
