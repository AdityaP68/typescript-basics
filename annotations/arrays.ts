//type inference working here
const carMarkers = ['ford', 'toyota', 'chevy']

//type annotation need to be added for empty array declaration
const carM: string[] = [];

const dates = [new Date(), new Date()]

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// empty 2D array
const cbm: string[][] = [];

//help with inference when extracting values
const cars = carMarkers[0];
const myCar = carMarkers.pop();

//prevent incompatible values
//error shown
// carMarkers.push(100);

// Help with 'map'

carMarkers.map((car: string): string =>{
    return car.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-12-01']