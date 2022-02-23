// - The `receivesAFunction` function should:

// - take a _callback function_ as an argument
// - call the callback function
// - it doesn't matter what this function returns, so long as it calls the
//   callback function

function sayHi() {
  console.log("hi!");
}

function receivesAFunction(cb) {
  return cb();
}

// receivesAFunction(sayHi);

// - The `returnsANamedFunction` function should:

// - take no arguments
// - return a _named function_

function returnsANamedFunction() {
  return sayHi;
}

// - The `returnsAnAnonymousFunction` function should:
// - take no arguments
// - return an _anonymous function_

function returnsAnAnonymousFunction() {
  return function () {
    console.log("anonymous");
  };
}
