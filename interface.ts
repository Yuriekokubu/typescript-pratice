const obj: {
  firstName: string;
  lastName: string;
} = {
  firstName: '',
  lastName: '',
};

interface Person {
  firstName: string;
  lastName: string;
}
[];

type ObjString = {
  firstName: string;
  lastName: string;
}[];

const obj2: Person = {
  firstName: 'string',
  lastName: 'string',
};

const objString: ObjString = [
  {
    firstName: '',
    lastName: '',
  },
];
