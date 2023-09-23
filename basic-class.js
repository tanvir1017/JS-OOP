class Player {
  constructor(name, age, skill) {
    //Constructor is the default function of class(OOP)
    this.name = name;
    this.age = age;
    this.skill = skill;
  }

  sayHello() {
    return `Hi, I'm ${this.name} playing as ${this.skill}`;
  }
}

const mashrafi = new Player("Mash", 37, "Bowler", false);
console.log(mashrafi.sayHello());
