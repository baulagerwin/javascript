let regex;

// Literal Characters
regex = /hello/;
regex = /hello/i;

// Metacharacter Symbols
regex = /^h/i; // Must begin with
regex = / world$/i; // Must end with
regex = /^world$/i; // Must begin and end with
regex = /h.llo/i; // Matches an ONE character
regex = /h*llo/i; // Matches more than ONE character
regex = /hello?/i; // Optional character
regex = /hello\?/i // Escape character

// Character Sets - [] Brackets
regex = /gr[ae]y/i; // Must contain an a or e, case insensitive
regex = /[GP]ray/; // Must be a G or P, case sensitive
regex = /[^GP]ray/i // Every letter except G and P, case insensitive
regex = /[A-Z]ray/ // Match any uppercase letter
regex = /[a-z]ray/ // Match any lowercase letter
regex = /[A-Za-z]ray/ // Match any letter
regex = /[0-9][0-9]/ // Match any digit from 0 to 9

// Quantifiers - {} Brackets
regex = /fra{3}y/i; // Must occur exactly n amount of times
regex = /fra{2,4}y/i // Must occur from n to m amount of times
regex = /fra{2,}y/i; // Must occur atleast n amount of times

// Grouping - () Brackets
regex = /([0-9]y){5}/i; 
regex = /^([0-9]y){5}$/i;

// Shorthand Character Classes
regex = /\w/ // Word Character - alphanumeric or _
regex = /\w+/ // Match any word character 0 or more times
regex = /\W/ // Non-word Character
regex = /\W+/ // Match any non-word character 0 or more times
regex = /\d/ // Match any Digit
regex = /\d+/ // Match any digit 0 or more times
regex = /\D/ // Match non-digit characters
regex = /\s/ // Match whitespace character
regex = /\S/ // Match non-whitespace characters
regex = /\S+/ // Match non-whitespace characters 0 or more times
regex = /Hell\b/i; // Word boundary

// Assertions
regex = /x(?=y)/ // Match x only if y is after it

// Input value
const str = 'xz';

// Console log result
const result = regex.exec(str);
console.log(result);

function regexTest(regex, str) {
    if (regex.test(str)) {
        console.log(`${str} matches ${regex.source}`);
    } else {
        console.log(`${str} does not match ${regex.source}`);
    }
}

regexTest(regex, str);