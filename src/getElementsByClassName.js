// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var result = [];

  var findClassName = function(node) {

    if (node.classList) {
      if (node.classList.contains(className)) {
        result.push(node);
      }

      if (node.childNodes) {
        node.childNodes.forEach(function(element) {
          findClassName(element);
        });
      }
    } 
  };

  findClassName(document.body);
  return result;
};
