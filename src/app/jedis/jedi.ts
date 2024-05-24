export type Jedi = {
  name: string;
  midichlorean: number;
  lightSaberColor: string;
};

export function createJedi(overrides?: Partial<Jedi>): Jedi {
  return {
    name: 'Luke Skywalker',
    midichlorean: 10_000,
    lightSaberColor: 'green',
    ...overrides,
  };
}
