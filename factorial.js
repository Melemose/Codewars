function factorial(n) {
  let total = 1;

  while (n >= 1) {
    total = total * n;
    n = n - 1;
  }

  return total;
}
