const profile = {
  name: "alex",
  age: 20,
  coords: { lat: 0, lng: 15 },
  setAge(age: number): void {
    this.age = age;
  },
};

//here we write the type annotaion of the expected structure
const { name, age }: { name: string, age: number} = profile;

const {coords: {lat, lng}}: {coords: {lat: number, lng: number}} = profile