const str = 'Hello?';
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