const getTheTitles = function(books) {
    let titles=[];
    for(const each of books){
        titles.push(each.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
