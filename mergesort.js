function split(wholeArray){
  const middle = Math.ceil((wholeArray.length) / 2);
  let firstHalf = wholeArray.slice(0, middle);
  let secondHalf = wholeArray.slice(middle);

  return [firstHalf, secondHalf];
}

function merge(left, right){
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  if (left[leftIndex] < right[rightIndex]){
    resultArr.push(left[leftIndex]);

    leftIndex++;
  } else {
    resultArr.push(right[rightIndex]);
    rightIndex++;
  }

  if ( (left.length === 0 && right.length === 1) || (left.length === 0 && right.length === 1) ) {

  }

  return resultArr;
}
