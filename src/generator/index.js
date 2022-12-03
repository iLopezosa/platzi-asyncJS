function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterable(array) {
    for (let item of array) {
        yield item;
    }
}

const it = iterable(['a', 'b', 'c']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const it2 = iterable(['alpha', 'beta', 'gamma']);
let next = it2.next();
while (!next.done) {
    console.log(next.value);
    next = it2.next();
}
