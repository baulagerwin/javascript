const subscribeBtn = document.getElementById('subscribe');
const unsubscribeBtn = document.getElementById('unsubscribe');
const fireBtn = document.getElementById('fire');

function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn) {
        this.observers = this.observers.filter(item => {
            if (item !== fn) {
                return item;
            };
        });

        console.log(`You are now unsubscribed from ${fn.name}`);
    },
    fire: function() {
        this.observers.forEach(item => item.call());
    }
}

const click = new EventObserver();

// Event Listeners for the buttons

subscribeBtn.addEventListener('click', () => {
    click.subscribe(greet);
});

function greet() {
    console.log('Hey, Phil');
}

unsubscribeBtn.addEventListener('click', () => click.unsubscribe(greet));
fireBtn.addEventListener('click', () => click.fire());