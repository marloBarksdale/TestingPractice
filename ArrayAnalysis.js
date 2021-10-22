

export function analyzeArray(array) {
  const obj = {
    average: averageArray(array),
    length: array.length,
    min: minimumVal(array),
    max: maxVal(array)
    // total:sumArray(array),  
  };

  console.log(obj);
  console.log(obj["max"]);

  return obj;
}

function averageArray(array) {
  return sumArray(array) / array.length;
}

function minimumVal(array) {
  return Math.min(...array);
}

function maxVal(array) {
  return Math.max(...array);
}

function sumArray(array) {
  const sum = array.reduce((total, number) => {
    return total + number;
  });

  return sum;
}

// analyzeArray(a);
