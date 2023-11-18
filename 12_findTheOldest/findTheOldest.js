const findTheOldest = function(people) {
    let oldest=people[0];
    let oldestAge=getAge(oldest.yearOfBirth,oldest.yearOfDeath);
    for(const each of people){
        let currentAge=getAge(each.yearOfBirth,each.yearOfDeath);

        if(currentAge>=oldestAge){
            oldest=each;
            oldestAge=currentAge
        }
    }
    return oldest;
};

const getAge=function(birth,death){
    if(!death){
        death=new Date().getFullYear();
    }
    return death-birth;
}

// Do not edit below this line
module.exports = findTheOldest;
