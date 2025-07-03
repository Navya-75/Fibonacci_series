function generateFibonacci() {
  const terms = parseInt(document.getElementById("terms").value);
  if (isNaN(terms) || terms <= 0) {
    document.getElementById("result").innerText = "Please enter a valid positive number.";
    return;
  }

  let fib = [];
  for (let i = 0; i < terms; i++) {
    if (i === 0) {
      fib.push(0);
    } else if (i === 1) {
      fib.push(1);
    } else {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
  }

  document.getElementById("result").innerText = "Fibonacci Series:
" + fib.join(", ");
}
