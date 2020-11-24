const assertEqual = function(actual, expected) {
  if( actual[0] === expected) {
    console.log(actual, expected) 
  }

  }

assertEqual([5,6,7], 5);
assertEqual(["Hello", "Lighthouse", "Labs"], "Hello");
assertEqual([])