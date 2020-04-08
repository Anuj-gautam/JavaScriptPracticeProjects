// coverting my age to dog years. assigned value of my age to a variable.
let myAge = 21 ;
// early years results into 10.5 years each.
let earlyYears = 2 ;

earlyYears *= 10.5 ;
// we have already considered two years in early years.
let laterYears = myAge - 2 ;
// calculating dog years for later years.
laterYears *= 4 ;

console.log(earlyYears);
console.log(laterYears);

// calculating age in dog years by adding both the years.
myAgeInDogYears = earlyYears + laterYears ; 

// taking my name and converting it into lower case.
let myName = 'Anuj'.toLowerCase() ; 

// printing my age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
