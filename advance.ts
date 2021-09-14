let a = 'Hello';
a = 'tae';
// a = 24;

let array: {}[] = ['d', 4, null, undefined, {}];

let object: {
  hello: string | number;
};

let rainbowColor: 'red' | 'green' | 'blue' = 'red';

rainbowColor = 'red';

rainbowColor = 'green';

enum Colors {
  Red = '#FF0000',
  Green = '#00FF00',
  Blue = '#0000FF',
}

let rainbowColor2: Colors = Colors.Red;
console.log(rainbowColor2);

let obj: {
  property: string;
  property2?: string;
} = {
  property: '',
};
