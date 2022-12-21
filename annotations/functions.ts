//always define type annotation as type inference doesnt work
//type inference works for the return statement but always define
// annotation for the return statement dont depend upon type inference
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multipy = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // return undefined --> technically valid for void functions
};

// never return type is for a function that will never reach an end
const throwError = (message: string): never => {
  //throwing an error means the function will never return anything
  throw new Error(message);
};

const error = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const forcast = {
    date: new Date(),
    weather: 'sunny'
}

// const logWeather = (forecast: {date: Date, weather: string}): void =>{
//     console.log(forcast.date, forcast.weather)
// }

// {destructed params}: {type annotation of the object}
const logWeather = ({date, weather}: {date: Date, weather: string}): void =>{
    console.log(date, weather)
}