const removeFromArray = function(incomingArr, ...toBeRemoved) {
    let returnArr = [];
    let theSame = false;
    
    for (let x = 0; x <= incomingArr.length - 1; x++)
    {
        theSame = false;
        for (let y = 0; y <= toBeRemoved.length - 1; y++)
        {
            if (incomingArr[x] == toBeRemoved[y] && typeof incomingArr[x] == typeof toBeRemoved[y])
            {
                theSame = true;
            }
        }

        if (theSame == false)
        {
            returnArr.push(incomingArr[x]);
        }
    }

    return returnArr;

};

// Do not edit below this line
module.exports = removeFromArray;