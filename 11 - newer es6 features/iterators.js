// Iterator
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true }; 
        },
        previous: function() {
            return nextIndex > 0 ? {value: names[--nextIndex], done: false } : (nextIndex === 0 ? {value: names[nextIndex]} : {done: true});
        }
    }
}

const namesArray = ['Phil', 'Tom', 'Josh'];
const iterator = nameIterator(namesArray);

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next())

const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const output = document.getElementById('output');

nextBtn.addEventListener('click', goNext);
previousBtn.addEventListener('click', goPrevious);

function goPrevious() {
    const previousValue = iterator.previous();

    if (previousValue.done) return;

    output.innerHTML = previousValue.value;
}

function goNext() {
    const nextValue = generator.next();

    if (nextValue.done) return;

    output.innerHTML = nextValue.value;
}

output.innerHTML = namesArray[0];

// Generator
function* nameGenerator(names) {
    let index = 0;

    while(index < names.length) {
        yield names[index++];
    }
}

const generator = nameGenerator(namesArray);