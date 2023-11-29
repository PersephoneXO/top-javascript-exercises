const caesar = function(str,shift) {
    /*const upper=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const lower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let newStr='';
    for (const letter of str){
        let newIndex=0;
        if(upper.includes(letter)){
            let upperMatch=upper.indexOf(letter);
            if((upperMatch+shift)<=upper.length-1){
                newIndex=upperMatch+shift;
                newStr+=upper[newIndex];
            }
            else{
                let remainingShift=(upper.length-1)-upperMatch;
                newIndex+=remainingShift;
                newStr+=upper[newIndex];
            }
        }
        else if (lower.includes(letter)){
            let lowerMatch=lower.indexOf(letter);
            if((lowerMatch+shift)<=lower.length-1){
                newIndex=lowerMatch+shift;
                newStr+=lower[newIndex];
            }
            else{
                let remainingShift=(lower.length-1)-lowerMatch;
                newIndex+=remainingShift;
                newStr+=lower[newIndex];
            }
        }
        else{
            newStr+=letter;
        }
    }
    return newStr;*/


    const upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower='abcdefghijklmnopqrstuvwxyz';

    let newStr='';
    for(const letter of str){
        let isUpper=upper.includes(letter);
        let isLower=lower.includes(letter);

        if(isUpper||isLower){
            let alphabet=isUpper ? upper : lower;
            let index=alphabet.indexOf(letter);
            let newIndex=(index+shift)%alphabet.length;

            if(newIndex<0){
                newIndex+=alphabet.length;
            }

            newStr+=alphabet[newIndex];
        }else{
            newStr+=letter;
        }
    }
    return newStr;
};

// Do not edit below this line
module.exports = caesar;
