const palindromes = function (str) {

    let strNoPunc=str.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
    let strCompressed=strNoPunc.split(" ").join("");

    let strRvs='';
    for (let i=strCompressed.length-1;i>=0;i--){
        strRvs+=strCompressed[i];
    }

    return strRvs==strCompressed;
};

// Do not edit below this line
module.exports = palindromes;
