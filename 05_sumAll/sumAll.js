const sumAll = function(num1,num2) {
    let largest=0;
    let smallest=0;
    if(num1<0||num2<0){
        return "ERROR";
    }
    if(typeof(num1)!="number"||typeof(num2)!="number"){
        return "ERROR";
    }


    if (num1>num2){
        largest=num1;
        smallest=num2;
    }
    else{
        largest=num2;
        smallest=num1;
    }

    let sum=0;
    for(let i=smallest;i<=largest;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
