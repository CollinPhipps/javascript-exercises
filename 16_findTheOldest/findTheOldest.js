const findTheOldest = function(people) {
    let currentYearOfDeath = new Date().getFullYear();
    let maxYearOfDeath = new Date().getFullYear();
    return people.reduce((max, person) =>  {
        if (("yearOfDeath" in person)) 
            currentYearOfDeath = person.yearOfDeath;
        if (("yearOfDeath" in max))
            maxYearOfDeath = max.yearOfDeath;

        const maxAge = maxYearOfDeath - max.yearOfBirth;
        const currentAge = currentYearOfDeath - person.yearOfBirth;
        
        return currentAge > maxAge ? person : max;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
