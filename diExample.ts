import { Injector } from '@angular/core';

class Doors {
  kind = 'doors';
}
class Engine {
  kind = 'engine';
}
class Car {
  constructor(public d: Doors, public e: Engine) {
    console.log(`D: ${d.kind}, E: ${d.kind}`);
  }
}

let injector = Injector.create([
  { provide: Doors, deps: [] },
  { provide: Engine, deps: [] },
  { provide: Car, deps: [Doors, Engine] }
]);
const car = injector.get(Car);
console.log(car);
