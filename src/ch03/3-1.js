fetch('https://the-girl.github.io/girl-group-json/db.json').then(res => {
  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error('Error');
  }
}).then(jsonData => {
  document.getElementById('idols').innerHTML = process(jsonData);
}).catch(e => {
  console.log(e);
});

function process(people) {
  const html = [];

  console.log(people.idols);

  for (const idol of people.idols) {
    if (idol.height && idol.weight) {
      const broca = ((idol.height - 105) * 0.9).toFixed(2);
      const bmi = (idol.height / 100 * idol.height / 100 * 21).toFixed(2);

      const obesityUsingBroca = ((idol.weight - broca) / broca * 100).toFixed(2);
      const obesityUsingBmi = ((idol.weight - bmi) / bmi * 100).toFixed(2);

      html.push(`<li>
        <dl>
          <dt>${idol.name}</dt>
          <dd>키: ${idol.height}</dd>
          <dd>몸무게: ${idol.weight}</dd>
          <dd>BROCA 표준체중: ${broca}</dd>
          <dd>BROCA 비만도: ${obesityUsingBroca}</dd>
          <dd>BMI 표준체중: ${bmi}</dd>
          <dd>BMI 비만도: ${obesityUsingBmi}</dd>
        </dl>
      </li>`);
    }
  }

  return html.join('');
}
