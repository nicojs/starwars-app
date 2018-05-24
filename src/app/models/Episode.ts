
export class Episode {
  constructor(public id: number, public title: string, public releaseDate: Date) { }
}

export interface EpisodeJson {
  id: number;
  title: string;
  releaseDate: string;
}
