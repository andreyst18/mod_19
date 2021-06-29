//module.exports = getReverseString;
//module.exports = sum;

export function sum(a, b) {
    return a + b;
}

export function getReverseString(arg) {
  let result = '';
    for (let i = arg.length - 1; i >= 0; i--) {
      result += arg[i];
    }
  return result;
}





