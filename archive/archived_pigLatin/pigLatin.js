function pigLatin(str) {
    let strSplit=str.split(' ');
    let newStr=[];
    for(const word of strSplit){

    let vowels='aeio';
    let newWord='';
    if(vowels.includes(word[0])){
        newWord+=word+'ay';
    }
    else{
        let firstVowel=false;
        let vowelIndex=0;
        while(!firstVowel){
            vowelIndex++;
            if(vowels.includes(word[vowelIndex])){
                firstVowel=true;
            }
        }

        let newStart=word.substring(vowelIndex);
        newWord+=newStart;

        for(let i=0;i<vowelIndex;i++){
            newWord+=word[i];
        }
        newWord+='ay';

    }
    newStr.push(newWord);
}
    return newStr.join(' ');
};

// Do not edit below this line
module.exports = pigLatin;
