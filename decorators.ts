@classDecorator
class Boat {
  // first arg is a prototype and it generally sotres methods
  // and decorators only run once during class creation so
  // no access to instance values
  @testDecorator
  color: string = "red";

  get formatterColor(): string {
    return `This boar is ${this.color}`;
  }

  @logError("Something bad")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}
function classDecorator(constructor: typeof Boat){
    console.log(constructor)
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

// intercepts the call from the pilot function and make our own
// console.log()

//decorator factory --->
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

//new Boat().pilot();
//testDecorator(Boat.prototype, 'pilot')

// why use them at all ?
