const convertToCelsius = function(temp) {
  let result=temp;
  result-=32;
  result*=5;
  result/=9;

  if(result%1==0){
    return result;
  }
  else{
    return Math.round(result*10)/10;
  }
};

const convertToFahrenheit = function(temp) {
  let result=temp;
  result*=9;
  result/=5;
  result+=32;

  if(result%1==0){
    return result;
  }
  else{
    return Math.round(result*10)/10;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
