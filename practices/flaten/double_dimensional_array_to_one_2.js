function double_to_one(collection) {
  var myArray = [];

  for (var i = 0; i < collection.length; ++i) {
    if (i === 0) {
      for (var j = 0; j < collection[i].length; ++j) {
        myArray.push(collection[i][j]);
      }
    }
    else {
      myArray = makeCollection(i, myArray, collection);
    }
  }

  return myArray;
}

function makeCollection(i, myArray, collection) {
  if (isArray(collection[i])) {
    doCollect(myArray, collection, i);
  }
  else {
    myArray.push(collection[i]);
  }

  return myArray;
}

function doCollect(myArray, collection, i) {
  var length = myArray.length;

  for (var j = 0; j < collection[i].length; ++j) {
    var k = 0;

    /*while (k < length) {
      if (myArray[k] != collection[i][j]) {
        ++k;
      }
      else {
        break;
      }
    }*/
    while(k < length && myArray[k] != collection[i][j] && ++k);

    if (k >= length) {
      myArray.push(collection[i][j]);
    }
  }

  return myArray;
}

function isArray(value) {

  return Object.prototype.toString.call(value) == "[object Array]";
}

module.exports = double_to_one;
