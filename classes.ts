// super class or parent class
// class Vehicle{
//     color: string = 'red'; // default

//     constructor(color: string){
//             this.color = color;
//     }

//     public drive(): void{
//         console.log('roll on')
//     }
//     protected honk(): void{
//         console.log('beep')
//     }
// }
class Vehicle{
    // assigns the arg as the instance variable of the object 
    constructor(public color: string){
    }

    public drive(): void{
        console.log('roll on')
    }
    protected honk(): void{
        console.log('beep')
    }
}

// inheritence
class Car extends Vehicle{
    constructor(wheels: number, color: string){
        // reference to the parent constructor method
        super(color);
    }
    // constructor int he parent is called if no contructor defined here
    private drive2(): void{
        console.log('vroom')
    }
    startDrivingProcess(): void{
        this.drive2()
        this.honk()
    }
}

const vehicle = new Vehicle('orange')
vehicle.drive()
console.log(vehicle.color)
// vehicle.honk()
const car = new Car(4, 'red')
car.startDrivingProcess()
// car.drive()
// car.honk()