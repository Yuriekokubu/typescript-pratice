const arrayOfString: (string | boolean)[] = ['1', '2', '3'];

arrayOfString.push('4');
arrayOfString.push(true);

const arrayOfBoolean: boolean[] = [true, false];
arrayOfBoolean.push(true, false);
console.log(arrayOfBoolean);

let arr: {
  name: string;
  gender: boolean;
  age: number;
}[] = [];

arr.push({ name: '', age: 2, gender: true });

const arrOfArrays = [[''], ['']];
