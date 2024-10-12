const fibonacci = function(num) {
    if (num == 0)
    {
        return 0;
    }

    if (num < 0)
    {
        return "OOPS";
    }

    let arr = [];

    for (let x = 0; x <= num; x++)
    {
        if(arr.length > 2)
        {
            arr[x] = arr[x-1] + arr[x-2];
        }
        else
        {
            arr[x] = 1;
        }
    }


    return arr[arr.length - 1];

};

// Do not edit below this line
module.exports = fibonacci;
