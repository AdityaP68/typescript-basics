const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

//type alias
type Drink = [string, boolean, number]

//introducing annotation to change the array to a tupple
const pepsi: [string, boolean, number] = ['brown', true, 40]
///or create a type alias
const sprite: Drink = ['clear', true, 50]

//tupples not much help though
const carSpecs: [number, number] = [400, 3554];
//objects are much more expressive, hence mostly used
const carStats = {
    horsepower: 400,
    weight: 3554
}