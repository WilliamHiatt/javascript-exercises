const sumAll = function(first, last) {

    let returnSum = 0;

    if (first < 0 || last < 0 || typeof first == String || typeof last == String || !Number.isInteger(first) || !Number.isInteger(last) )
    {
        return "ERROR";
    }

    if (first < last)
    {
        for (let x = first; x <= last; x++)
        {
            returnSum += x;
        }
    }
    else if (last < first)
    {
        for (let x = last; x <= first; x++)
        {
            returnSum += x;
        }
    }
    else
    {
        return first + last;
    }

    return returnSum;
};

// Do not edit below this line
module.exports = sumAll;
