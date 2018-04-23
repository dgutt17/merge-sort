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

  while(leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]){
        resultArr.push(left[leftIndex]);
        leftIndex++
      } else {
        resultArr.push(right[rightIndex]);
        rightIndex++
      }
  }
  
  return resultArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array){
    if (array.length === 1){
      return array;
    }
    let splitArray = split(array);
    console.log(splitArray[1])

    return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]));
}

