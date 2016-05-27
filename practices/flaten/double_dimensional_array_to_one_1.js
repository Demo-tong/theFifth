function double_to_one(collection) {

  var myArray = [];

  myArray = doCollect(myArray, collection);

  return myArray;
}

function doCollect(myArray, collection) {
  for (var i = 0; i < collection.length; ++i) {
    if (isArray(collection[i])) {
      for (var j = 0; j < collection[i].length; ++j) {
        myArray.push(collection[i][j]);
      }
    }
    else {
      myArray.push(collection[i]);
    }
  }

  return myArray;
}

function isArray(value) {

  return Object.prototype.toString.call(value) == "[object Array]";
}
module.exports = double_to_one;
