const promise = new Promise((resolve, reject) => {
  console.log('create promise');
  try {
    resolve(1);
  } catch(e) {
    reject("error promise");
  }
});

promise.then(
  value => console.log(`first promise ${value}`),
  error => console.error(`first promise ${error}`),
);

promise.then(
  value => console.log(`second promise ${value}`),
  error => console.error(`second promise ${error}`),
);
