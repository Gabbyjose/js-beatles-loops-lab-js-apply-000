function theBeatlesPlay(array1, array2){
  var instrumentArr = [];
  for(var i=0; i < array1.length; i++){
    instrumentArr.push(array1[i] +" plays " + array2[i])
  }
  return instrumentArr;
}

function johnLennonFacts(factsArray){
  var exclamationArray = [];

  while (exclamationArray.length <= factsArray.length){
    exclamationArray.push(factsArray[i] + "!!!");
  }

  return exclamationArray;
}