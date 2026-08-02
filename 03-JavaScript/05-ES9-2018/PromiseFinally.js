// Promise finally example
function fetchData() {
  return Promise.resolve('done');
}

fetchData()
  .then(result => console.log(result))
  .catch(err => console.error(err))
  .finally(() => console.log('Cleanup complete'));
