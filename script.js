//////////////  /Part 1: Stack Overflow ///////////////////////
function stackOverflowExample(counter) {
  try {
    counter++;
    stackOverflowExample(counter);
  } catch (e) {
    console.log("maxinum call stack size exceded at:", counter);
  }
}
stackOverflowExample(0);

///////////////// Part 2: Trampolines ///////////////////////
function Trampolines(fn) {
  return function (...args) {
    let result = fn(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  };
}
/////////////////// Part 3: Deferred Execution //////////////////////
