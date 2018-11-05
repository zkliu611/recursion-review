// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // BASE CASES
  // if you find ""string"", you expect to return a string
  // if you find "null", you expect to return null
  // if you find "8", you expect to return 8
  // if you find undefined, return undefined
  // if you find "boolean", return boolean

  // doesn't work for functions, undefined, and NaN 

  // if you find "[...]", return [...]
  // check each element in the array for the base cases
  // create an empty array and push all parsed elements into the result array

  // if you find "{...}", return {}
  // check each key / value pair in the object for base cases
  // create an empty object to hold the key / value pairs 
};
