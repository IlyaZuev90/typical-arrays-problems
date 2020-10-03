
exports.min = function min (array) {
  if (array && array.length !== 0) {
    const minimum = Math.min.apply(null, array);
    return minimum;
  } 
  else {
    return 0;
  }
       
}

exports.max = function max (array) {
  if (array && array.length !== 0) {
    const maximum = Math.max.apply(null, array);
    return maximum;
  } 
  else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array && array.length !== 0) {
    var sum = 0;
    for (var i = 0, j = array.length; i < j; i++) {
      sum += array[i];
  }
  return sum / array.length;
    
  } 
  else {
    return 0;
  }
}
