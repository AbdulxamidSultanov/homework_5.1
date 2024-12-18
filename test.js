let count = 5;

function increment() {
  count++;
  console.log("Function scope:", count);
}

increment();
if (true) {
  count += 2;
  console.log("Block scope:", count);
}

console.log("Global scope:", count);