const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
})

let cows = 9;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We have ${cows} cows at the farm`);
    } else {
        reject('No cows at the farm');
    }
})

countCows.then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log('Finally'));

while(cows < 999999) {
    cows += 0.001;
}
console.log('In the meantime');