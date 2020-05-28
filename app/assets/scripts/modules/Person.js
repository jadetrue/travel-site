function Person(fullName, favColour) {
    this.name = fullName;
    this.colour = favColour;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.colour + ".");
    }
}

export default Person;