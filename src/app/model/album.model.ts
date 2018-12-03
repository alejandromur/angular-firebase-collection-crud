import { AboutModel } from './about.model';
import { Players } from './players.model';
import { Tracklist } from './tracklist.model';

export class AlbumModel {
  $key: string;
  id: number;
  title: string;
  path: string;
  alt: string;
  city?: string;
  year: number;
  linkVideo: string;
  artist: string;
  players: Players[];
  tracklistA: Tracklist[];
  tracklistB: any[];
  about: AboutModel;
}
