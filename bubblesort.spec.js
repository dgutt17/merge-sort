describe('Bubble Sort', function() {
  it('calls itself n times (iterative)', function() {
    const arr = [5, 3, 10, 2, 8, 7];
    spyOn(window, 'bubbleSort').and.callThrough();
    bubbleSort(arr);
    expect(bubbleSort.calls.count()).toEqual(1);
  });

  it('handles empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles non-array argumnet', function() {
    expect(bubbleSort('hello world')).toEqual(undefined);
  });
  it('sorts array from lowest to highest', function() {
    expect(bubbleSort([4, 5, 10, 3, 1])).toEqual([1, 3, 4, 5, 10]);
  });
  it('handles single element array', function() {
    expect(bubbleSort([4])).toEqual([4]);
  });

  it('calls itself n times (recursive)', function() {
    const arr = [5, 3, 10, 2, 8, 7];
    spyOn(window, 'bubbleSortRecursive').and.callThrough();
    bubbleSortRecursive(arr);
    expect(bubbleSortRecursive.calls.count()).toEqual(6);
  });

  it('sorts array from lowest to highest', function() {
    expect(bubbleSortRecursive([4, 5, 10, 3, 1])).toEqual([1, 3, 4, 5, 10]);
  });

});
