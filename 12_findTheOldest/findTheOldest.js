function getAge(user)
{
    if("yearOfDeath" in user)
    {
        return user.yearOfDeath - user.yearOfBirth;
    }
    else
    {
        const d = new Date();
        let year = d.getFullYear();

        return year - user.yearOfBirth;
    }
}

const findTheOldest = function(peopleArr) {
    let oldestPerson = peopleArr[0];

    peopleArr.forEach(function (user){
        if(getAge(oldestPerson) < getAge(user))
        {
            oldestPerson = user;
        }
    });

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
