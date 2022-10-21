// Factory Pattern

function MemberFactory() {

    this.createMember = function(name, type) {
        let membership;

        switch(type) {
            case 'plus':
                membership = new PlusMembership(name);
                break;
            case 'gold':
                membership = new GoldMembership(name);
                break;
            case 'ultra':
                membership = new UltraMembership(name);
                break;
            default:
                return;
        }

        return membership;
    }
}

const PlusMembership = function(name) {
    this.name = name;
    this.cost = '$9.99';
}

const GoldMembership = function(name) {
    this.name = name;
    this.cost = '$19.99';
}

const UltraMembership = function(name) {
    this.name = name;
    this.cost = '$39.99';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Phil', 'plus'));
members.push(factory.createMember('John', 'ultra'));
members.push(factory.createMember('Josh', 'gold'));

console.log(members);