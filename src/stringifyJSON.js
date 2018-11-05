// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  var result;

  if (obj === undefined || typeof obj === 'function') {
    return undefined;
  }
  if (typeof obj === 'string') {
    result = '"' + obj + '"';
    return result;
  }
  if (typeof obj === 'NaN' || obj === null) {
    return 'null';
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  }

  if (Array.isArray(obj)) {

    if (obj.length === 0) {
      return '[]';
    }
    
    result = '[';

    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) + ',';
    }
  
    result.slice(0, obj.length - 1);
    result += ']';
    return result;

  }

  if(type)

  

  // your code goes here




  
  
  // if typeof elem === number, null, etc add quotes
  
  // if Array.isArray, iterate through / recursion
  // same for obj 

};
