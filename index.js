// Constructor function for BoardMember
function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
}

// Adding methods to the prototype of BoardMember
BoardMember.prototype.veto = function() {
    return "No, I must disagree";
};

BoardMember.prototype.approve = function() {
    return "You can do that!";
};

BoardMember.prototype.doCharity = function() {
    return "I like to help people.";
};

BoardMember.prototype.releasePressStatement = function() {
    return "You will see great things from Scuber.";
};

BoardMember.prototype.sayHi = function() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
};
// Creating BoardMember instances
const member1 = new BoardMember("Alice", "New York", "Finance");
const member2 = new BoardMember("Bob", "California", "Marketing");

// Using methods
console.log(member1.veto()); // No, I must disagree.
console.log(member2.approve()); // You can do that!
console.log(member1.doCharity()); // I like to help people.
console.log(member2.releasePressStatement()); // You will see great things from Scuber.
console.log(member1.sayHi()); // Hi, my name is Alice. I am from New York, and I was trained in Finance.
