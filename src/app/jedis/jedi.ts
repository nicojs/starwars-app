export type Jedi = {
  name: string;
  midichlorean: number;
}

export function createJedi(overrides?: Partial<Jedi>): Jedi {
  return {
    name: 'Luke Skywalker',
    midichlorean: 10_000,
    ...overrides,
  };
}
