describe('Split Array function', function(){
  it('is able to split an odd numbered array into two halves', function(){
    expect(split([1,2,3,4,5])).toEqual([[1,2,3], [4,5]])
  })
  it('is able to split an even numbered array into two halves', function(){
    expect(split([1,2,3,4,5,6])).toEqual([[1,2,3], [4,5,6]])
  })
})

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    const right = [4]
    const left = [5];
    const resultArr = [4,5];
    expect(merge(left, right)).toEqual(resultArr);
  })
})
