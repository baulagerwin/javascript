// Singleton Pattern

const Singleton = (function() {
    let instance;

    function createInstance() {
        return new Object({ name: 'Phil' });
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            } 
            return instance;
        }
    }
})();

const instance1 = Singleton.getInstance();

const instance2 = Singleton.getInstance();

console.log(instance1, instance2);
console.log(instance1 === instance2);

// Session Service
// Session Service Receives Session from Injector Service that has one instance

// Component A
// Component B
// Component C