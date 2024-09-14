const reverseString = function(incomingStr) {
    let returnStr = "";

    for (let x = incomingStr.length -1; x >= 0; x--)
    {
        returnStr += incomingStr[x];
    }

    return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
