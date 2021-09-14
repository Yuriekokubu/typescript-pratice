// class Car {
//   constructor(model, color, age) {
//     this.model = model;
//     this.color = color;
//     this.age = age;
//   }

//   describe() {
//     console.log(`A ${this.age} year old ${this.color} ${this.model}`);
//   }
// }

// class Car {
//   model: '';
//   color: string = 'black';
//   age: number;
//   private peopleInPolicy: string[] = [];
//   private readonly manufacorDate: string = '2019-01-01';
//   constructor(model, age) {
//     this.model = model;
//     this.age = age;
//   }

//   describe() {
//     console.log(`A ${this.age} year old ${this.color} ${this.model}`);
//   }

//   addToPolicy(name: string) {
//     this.peopleInPolicy.push(name);
//   }

//   getPolicy() {
//     console.log(this.peopleInPolicy);
//   }
// }
// const myJaquar = new Car('jx', 2);
// myJaquar.addToPolicy('Ativat');
// myJaquar.peopleInPolicy.push('Avocado');
// console.log(myJaquar.age);
// myJaquar.getPolicy();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Vehicle {
  private peopleInPolicy: string[] = [];
  private readonly manufacorDate: string = '2019-01-01';
  constructor(
    public model: string,
    public color: string,
    public age: number = 0
  ) {
    this.model = model;
    this.age = age;
  }

  describe() {
    console.log(`A ${this.age} year old ${this.color} ${this.model}`);
  }

  addToPolicy(name: string) {
    this.peopleInPolicy.push(name);
  }

  getPolicy() {
    console.log(this.peopleInPolicy);
  }
}

const myJaq = new Vehicle('js', 'red', 2);
myJaq.describe();
myJaq.addToPolicy('Avocado');
myJaq.addToPolicy('Hi');
myJaq.getPolicy();
