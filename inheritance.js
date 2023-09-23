class Human {
  constructor(name) {
    // Constructor is a function for class. Every function inside the class called method
    this.name = name;
    this.arms = 2;
    this.legs = 2;
  }
}

const human = new Human("Tanvir"); // Class is just a blueprint to create new object with the property you set
console.log(human); // Outputs: Human { name: 'Tanvir', arms: 2, legs: 2 }

// Now let's see an example of dry by class or We called ▶ INHERITANCE 👀

class Baby extends Human {
  constructor(name) {
    // Again constructor is as function of a class
    // super keyword means to call the parent class and pass its value in here. Or we can say super class just paste the value of parent into the child, But needed parameter will have to pass through by super()
    super(name);
    this.cute = true;
  }
}

const usaimeen = new Baby("Usaimeeen"); // creating new class
console.log(usaimeen); //Baby { name: 'Usaimeeen', arms: 2, legs: 2, cute: true }
