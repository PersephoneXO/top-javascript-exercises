const add = function(num1,num2) {
  return num1+num2;
};

const subtract = function(num1,num2) {
  return num1-num2;
};

const sum = function(arr) {
  if(arr.length==0){
    return 0;
  }
  else{
    let sum=0;
    for (let i=0;i<arr.length;i++){
      sum+=arr[i];
    }
    return sum;
    }
};

const multiply = function(arr) {
  let sum=arr[0];
  for(let i=1;i<arr.length;i++){
    sum*=arr[i];
  }
  return sum;
};

const power = function(num1,num2) {
  let result=num1;
  for(let i=1;i<num2;i++){
    result*=num1;
  }
  return result;
};

const factorial = function(num) {
  if(num==0||num==1){
    return 1;
  }

  else{
    let result=1;
    for(let i=2;i<=num;i++){
      result*=i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
