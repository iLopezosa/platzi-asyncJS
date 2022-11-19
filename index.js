function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(sum(2, 3), calc(2, 3, sum));

setTimeout(() => {
    console.log('Time is done!');
}, 2000)

function gretting(name) {
    console.log('Hello ' + name);
}

setTimeout(gretting, 2000, 'John');