const fnAsync = () => {
    return new Promise((resolve, reject) => {
        true ? setTimeout(() => resolve('Async!!'), 2000) : null;
    });
};

const anotherFunction = async () => {
    const some = await fnAsync();
    console.log(some);
    console.log('Hi');
};

console.log('>');
anotherFunction();
console.log('<');
