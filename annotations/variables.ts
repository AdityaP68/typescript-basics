let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;


//built in objects
let now: Date = new Date()

//Array
//string[] tells that we are gonna have a type = array
//with its elements being string
let colors: string[] = ['red', 'green', 'blue']

let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, true]

// Classes
class Car{

}

let car: Car = new Car();

//Object Literal
//prop name should be same as type annotation
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

//Function
// (i: number)=>void annotation means function having arg i
// with type number and with returns void & also defining type
// for the argument
const logNumber: (i: number)=> void = (i: number) =>{
    console.log(i);
}

//When to use annotations -------------------------------
// 1) Function that returns the 'any' type --------------

// const json = '{"x": 10, "y":20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates); //{x: 10, y: 20};
// coordinates.dgxdbdbsbdsdbbdbd //TS doenst warn us due to 'any' type

const json = '{"x": 10, "y":20}';
const coordinates: {x:number; y:number} = JSON.parse(json);
console.log(coordinates); //{x: 10, y: 20};

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i =0; i < words.length; i++ ){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

// 3) Variable whoes type cant be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;//any one of the type

for(let i = 0; i < numbers.length; i++){
    numberAboveZero = numbers[i]
}