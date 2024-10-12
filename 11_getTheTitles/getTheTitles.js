const getTheTitles = function(arrOfBooks) {
    let returnArr = []

    arrOfBooks.forEach((obj) => returnArr.push(obj.title));

    return returnArr;
};

// Do not edit below this line
module.exports = getTheTitles;
