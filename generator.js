
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}

const it = foo();

it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: undefined, done: true }

