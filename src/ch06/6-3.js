const promise = new Promise((resolve, reject) => {
  console.log('create promise');
  try {
    resolve(1);
  } catch(e) {
    reject("error promise");
  }
});

// promise.then(
//   value => console.log(`promise ${value}`),
//   error => console.error(`promise ${error}`),
// );
