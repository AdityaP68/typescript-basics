// the check will be for the property summary() extra property doesnt cause an issue 
// hence oldCivic2 object doesnt give an error dispite having other props.
interface Reportable {
    // name: string;
    // year: Date;
    // broken: boolean;
    summary(): string; // a function returning string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
}
const oldCivic2 = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name ${this.name}`
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar in it`
    }
}

// annotation is too long for a simple object and imagine if we 
// have to write out this annotation for multiple nested functions
// hence for code reusibility we use interfaces
const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken ?: ${vehicle.broken}`)
}

printVehicle(oldCivic)

// much more leaner and the param will be checked against the interface
const printSummary = (item: Reportable ): void =>{
    // console.log(`Name: ${vehicle.name}`)
    // console.log(`Year: ${vehicle.year}`)
    // console.log(`Broken ?: ${vehicle.broken}`)
    console.log(item.summary())
}

printSummary(oldCivic2)
// here we use same interface for different objects
// shows us that more reusable code can be written with Typescript
printSummary(drink)