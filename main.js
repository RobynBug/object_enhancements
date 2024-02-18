// Same key values

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

// console.log(createInstructor("Robyn", "Highsmith"));

//Computed Property Names

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
  }

  //object Methods

  const instructor1 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

//   console.log(instructor1.sayHi());

// Create animal function

const animalFunction = (species, nameOfFunction, soundItMakes) => {
    return {
        species,
        [nameOfFunction](){
            return soundItMakes;
        }
    };

}

// const cow = animalFunction("cow", "mooing", "Mooooooooo!");

// console.log(cow.mooing());

