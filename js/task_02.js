'use strict'

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

function printPrimes(max) {
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) console.log(i);
  }
}

printPrimes(100);