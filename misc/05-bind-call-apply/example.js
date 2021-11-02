class Shape {
  constructor(foo){
    this.foo = foo;
    console.log(this);
  }
  
  hello () {
    return this.foo;
  }
}

console.log('Each new shape has it\'s own this context. It can be reused in member methods.')
console.log(new Shape(1).hello());
console.log(new Shape(2).hello());

const obj = {
  a: 1,
  b: function (some, param) {
    console.log(this, some, param);
  },
  c: () => {
    console.log(this);
  },
  d(){
      console.log(this);
  }
};

console.log('Just log the object')
console.log(obj);

console.log('Calling b --> this will be `obj`')
obj.b();

console.log('\nApply requires an array of arguments …');
console.log('1. this will now be the string "hello"');
obj.b.apply("hello", [1, 2]);
console.log('2. this will be global')
obj.b.apply(undefined, [1, 2]);


// Nowadays, apply and call can be used interchangeably due to spread operator
obj.b.apply(undefined, [1, 2]);
obj.b.call(undefined, ...[1, 2]);

console.log('\nCall requires a list of arguments …');
console.log('1. this will now be the string "hello"');
obj.b.call("hello", 1, 2);
console.log('2. this will be global')
obj.b.call(undefined, 1, 2);

console.log('\nBind is really just overriding this and create a new fun...');
console.log(obj.b.bind('hello'))
obj.b.bind('hello')(1, 2);

console.log('\nArrow funs cannot be overridden');
obj.c();
obj.c.call('hello')

// Currying is particularly popular in functional programming:
function sum(a,b) {
  return a + b;
}

const sumWith2 = sum.bind(undefined, 2); // Creates a new function with undefined this context and a binding for a = 2

console.log(sumWith2(5)) // Returns 2 + 5