//complete this code
class Animal {
 constructor(species){
  this._species = species;
 }
	getSpecies  (species){
		this._species = species;
		
}
	 Sound (){
     console.log(`the ${this._species}make sound`);
	
	}
	
	
}

class Dog extends Animal {

	purr() {
		console.log("purr");
	}
	
}

class Cat extends Animal {
	bark(){
		console.log("woof");
	}
}
const Dog_1 = new Dog ("Golden Retriever");
const Cat_2 = new Cat("Siamese");
Dog_1.Sound();
Cat_2.Sound();
Dog_1.purr();
Cat_2.bark();



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
