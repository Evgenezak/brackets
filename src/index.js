module.exports = function check(str, bracketsConfig) {
  if (str.length%2 != 0) {
    return false;
  }

  let halfLength = str.length/2;
  let stackOfBrakets = [];
  for (let i=0; i<str.length; i++) {
    let lastSign = stackOfBrakets[stackOfBrakets.length-1];
    let sample = [lastSign, str[i]];
    if (bracketsCheck(sample, bracketsConfig)){
      stackOfBrakets.pop();
    } else {
      stackOfBrakets.push(str[i]);
    }
  }
  if (stackOfBrakets.length > 0){
    return false
  }
  return true;
}

function bracketsCheck(sample, bracketsConfig){
  for (let i=0; i< bracketsConfig.length; i++) {
    if ( sample[0] === bracketsConfig[i][0] && sample[1] === bracketsConfig[i][1] ) {
      return true;
    }
  }
  return false;
}