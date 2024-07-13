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
