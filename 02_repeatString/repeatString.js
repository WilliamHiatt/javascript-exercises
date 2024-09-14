const repeatString = function(incomingStr, times) {
    if (times < 0)
    {
        return "ERROR";
    }

    let returnString = ""

    for (let x = 1; x <= times; x++)
    {
        returnString += incomingStr;
    }

    return returnString;

};

// Do not edit below this line
module.exports = repeatString;
