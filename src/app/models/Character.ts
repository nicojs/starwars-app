

export class Character {
  constructor(public id: number, public name: string, public age: number) { }
}

export interface CharacterJson {
  id: number;
  name: string;
  age: number;
}
