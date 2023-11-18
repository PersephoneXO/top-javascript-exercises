const fibonacci = function(num) {

    let index=Number(num);
    index-=1;

    if(index<0){
        return "OOPS";
    }

    let sequence=[1,1,2,3,5,8];
    if (index<=sequence){
        return sequence[index];
    }

    else{
        while(index>=sequence.length){
            let next=sequence[sequence.length-1];
            next+=sequence[sequence.length-2];
            sequence.push(next);
        }

        return sequence[index];
    }

};

// Do not edit below this line
module.exports = fibonacci;
