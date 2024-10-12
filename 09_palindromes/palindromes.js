const palindromes = function (incomingStr) {
    let pntr1 = 0;
    let pntr2 = incomingStr.length - 1;

    while(pntr1 <= pntr2)
    {
        if(!(incomingStr[pntr1].match(/^[a-zA-Z0-9]+$/) !== null) || !(incomingStr[pntr2].match(/^[a-zA-Z0-9]+$/) !== null))
        {
            if(!(incomingStr[pntr1].match(/^[a-zA-Z0-9]+$/) !== null))
            {
                pntr1++;
            }

            if(!(incomingStr[pntr2].match(/^[a-zA-Z0-9]+$/) !== null))
                {
                    pntr2--;
                }
        }
        else if(incomingStr[pntr1].toLowerCase() != incomingStr[pntr2].toLowerCase())
        {
            return false;
        }
        else
        {
            pntr1++;
            pntr2--;
        }
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
