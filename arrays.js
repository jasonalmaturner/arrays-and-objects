var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

// using a for loop
var matcher = function(arr) {
  var randomNum = getRandomArbitrary();
  // console.log(randomNum);
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === randomNum){
      return true;
    }
  }
  return false
}

// using indexOf
var matcher2 = function(arr) {
  var randomNum = getRandomArbitrary();
  // console.log(randomNum);
  if(arr.indexOf(randomNum) !== -1){
    return true;
  } else {
    return false;
  }
}

var myGroceryList = ['chips', 'chips', 'pizza', 'hotpockets', 'chips', 'MtnDew', 'corndogs'];

var removeItem = function(item, arr){
  debugger;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === item){
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

var removeItem2 = function(item, arr){
  for(var i = arr.length; i >= 0; i--){
    if(arr[i] === item){
      arr.splice(i, 1);
    }
  }
  return arr;
};

var addItem = function(item, arr){
  // This ensures the item is only added if it isn't in the arr already
  if(arr.indexOf(item) === -1){
    arr.push(item);
  } else {
    console.log("The item is already in the list, ya big dumb")
  }
}

var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number to both arr1 and arr2.
//Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.

var longer = function (array1, array2) {
  if(array1.length > array2.length){
    return array1;
  } else {
    return array2;
  }
}

// This returns a new, merged array
var both = function(array1, array2){
  return array1.concat(array2);
}

// This returns a new, merged array, but without using .concat
var both2 = function(array1, array2){
  var newArr = [];
  for(var i = 0; i < array1.length; i++){
    newArr.push(array1[i]);
  };
  for(var i = 0; i < array2.length; i++){
    newArr.push(array2[i]);
  };
  return newArr;
}

// This returns a new array containing two arrays
var both3 = function(array1, array2) {
  return [array1, array2];
}

// This function will return an array with numbers that are only found in both arrays
var both4 = function(array1, array2) {
  var newArr = [];
  if(array1.length > array2.length){
    var longer = array1.slice();
    var shorter = array2.slice();
  } else {
    var longer = array2.slice();
    var shorter = array1.slice();
  }
  for(var i = 0; i < longer.length; i++){
    if(shorter.indexOf(longer[i]) !== -1){
      newArr.push(longer[i])
    }
  }
  return newArr;
};

// Using nested for loops is not very good for performance. Using .indexOf inside of a
// for loop is functionally still a nested for loop. Don't worry about performance
// for right now, but eventually it will be good to learn how to avoid nested
// for loops. Using a hash table is a really good way to avoid nested for loops.
// Look at https://gist.github.com/dckesler/30a6a397e53f61a0c147 for a solution that
// uses a hash table.
