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

  let finalVal;
  if(left[left.length-1] < right[right.length-1]){
      finalVal = right[right.length-1]
  } else {
      finalVal = left[left.length-1]
  }
  return resultArr;
}

function mergeSort(array){
    if (array.length === 1){
      return array;
    }
    let splitArray = split(array);

    return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]));
}

console.log(mergeSort([3,4,7,1,99,0,34,2]));
