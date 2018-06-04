export class AlbumModel {
  id: number;
  title: string;
  path: string;
  alt: string;
  city?: string;
  year: Date;
  artist: string;
  players: string[];
  tracklistSideA: number[];
  tracklistSideB: number[];
  about: Object;
}
