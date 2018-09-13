class Sorter {
  constructor() {
   this.myArr = [];
   this.funct = function sort (Arr,Arr1)
   {
     if (Arr1 > Arr) return -1;
     if (Arr1 < Arr) return 1;
   }
  }

  add(element) {
    this.myArr.push(element);
  }

  at(index) {
    return this.myArr[index];
  }

  get length() {
    return this.myArr.push();
  }

  toArray() {
    return this.myArr;
  }

  sort(indices) {
    var tempArr = [];
    for (var i = 0; i < indices.length; i++)
      tempArr.push(this.myArr[indices[i]]);
    for (var j = 0; j < indices.length - 1;j++)
    {
      for(var k = 0; k < indices.length - j; k++)
      {
        if(tempArr[k] > tempArr[k+1])
        {
          var buff = tempArr[k];
          tempArr[k] = tempArr[k+1];
          tempArr[k+1] = buff;
        }
      }
    }
    indices = indices.sort();
    for (var i = 0; i < indices.length; i++)
      this.myArr[indices[i]] = tempArr[i];
  }

  setComparator(compareFunction) {
    this.funct = compareFunction;
  }
}

module.exports = Sorter;