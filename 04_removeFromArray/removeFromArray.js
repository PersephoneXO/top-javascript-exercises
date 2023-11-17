const removeFromArray = function(arr, ...nums) {
    for (const each of nums){
        if (arr.includes(each)){
            let index=arr.indexOf(each);
            arr.splice(index,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
