class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, recipient) {
        this.chatroom.send(message, this, recipient);
    }

    receive(message, sender) {
        console.log(`${sender.name} to ${this.name}: ${message}`);
    }
}

class Chatroom {
    users = {};

    register(user) {
        this.users[user.name] = user;
        user.chatroom = this;
    }

    send(message, sender, recipient) {
        if (recipient) {
            recipient.receive(message, sender);
        } else {
            for (let key in this.users) {
                if (this.users[key] !== sender) {
                    this.users[key].receive(message, sender);
                }
            }
        }
    }
}

const phil = new User('Phil');
const tom = new User('Tom');
const james = new User('James');
const chatroom = new Chatroom();

chatroom.register(phil);
chatroom.register(tom);
chatroom.register(james);

phil.send('Hello Tom', tom);
james.send('Phil, I like your avatar.', phil);
tom.send('Hello everyone');