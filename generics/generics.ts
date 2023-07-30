class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// the above two classes can be compressed into one
// using generics (templates in C++)
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// type inference is occuring here as we can see
// no type declaration is done here for the generics
const arr = new ArrayOfAnything(["a", "b", "c"]);

// Example of generics with functions

function printString(arr: string[]): void{
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
function printNumbers(arr: number[]): void{
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
// generics used here
function printAnything<T>(arr: T[]): void{
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
// dont use <string[]> it will mean a 2d array is passed
//printAnything<string>(['a', 'b', 'c'])
printAnything<string>(['a', 'b', 'c'])

//Generic Constraints

class Car{
  print(){
    console.log('Im a car')
  }
}
class House{
  print(){
    console.log('Im a house')
  }
}

interface Printable{
  print(): void;
}
function printHousesOrCars<T extends Printable>(arr: T[]): void{
  for(let i = 0; i < arr.length; i++){
    //gives error as there is no garauntee that for type T a print
    //method is available for example there is no print method
    // available for numbers and if they passed as args the code will break
    arr[i].print()
  }
}


printHousesOrCars<House>([new House(), new House()])
printHousesOrCars([new House(), new Car()])