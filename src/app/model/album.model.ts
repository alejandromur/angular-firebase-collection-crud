export class AlbumModel {
  id: number,
  title: string;
  path: string,
  picture: string,
  city?: string,
  year: Date;
  artist: string;
  players: string[];
  instruments: string[],
  tracklistSideA: number[];
  tracklistSideB: number[];
  tracklistDurationSideA: number[],
  tracklistDurationSideB: number[],
  gift: string;
  date: Date;
  comments: string
}
