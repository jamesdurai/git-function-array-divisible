let arr = [20, 15, 12, 30, 18, 25, 8]

function countDivisibleNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 4 === 0 && arr[i] % 3 === 0 && arr[i] % 5 === 0) {
        count++;
      }
    }
    return count;
  }

  document.write(countDivisibleNumbers(arr))