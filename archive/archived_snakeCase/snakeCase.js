const snakeCase = function(str) {
    let lwrStr=str.toLowerCase();
    let alphabet='abcdefghijklmnopqrstuvwxyz';
    let newStr='';

    let upperCount=0;
    let upperIndex=0;
    let spaceCount=0;
    for(let i=0;i<str.length;i++){

        if(alphabet.includes(lwrStr[i])&& str[i]==str[i].toUpperCase()){
            upperCount++;
            upperIndex=i;
        }
        if(str[i]==' '){
            spaceCount++;
        }
    }
    if(upperCount==1&&spaceCount==0){
        let start=lwrStr.substring(0,upperIndex);
        let end=lwrStr.substring(upperIndex,lwrStr.length);
        newStr+=start+'_'+end;
        return newStr;

    }




    for(const char of lwrStr){
        if(alphabet.includes(char)){
            newStr+=char;
        }
        else{
            if(newStr[newStr.length-1]!=='_'){
                newStr+='_';
            }
        }
    }

    if(newStr[newStr.length-1]==='_'){
        newStr=newStr.slice(0,-1);
    }

    newStr = newStr.replace(/([a-z])([A-Z])/g, '$1_$2');

    return newStr;
};

// Do not edit below this line
module.exports = snakeCase;
