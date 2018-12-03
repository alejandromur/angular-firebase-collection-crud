import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { AlbumModel } from '../model/album.model';

@Injectable()
export class AlbumService {

  albumList: AngularFireList<any>;
  selectedAlbum: AlbumModel = new AlbumModel();

  constructor(private firebase: AngularFireDatabase) { }

  getAlbums() {
    return this.albumList = this.firebase.list('albums');
    // Para traer X referencias
    // return this.albumList = this.firebase.list('albums', ref => ref.limitToFirst(3));
  }

  // getAlbum($key: string) {
  //   return this.selectedAlbum = this.firebase.object($key);
  // }

  insertAlbum(album: AlbumModel) {
    this.albumList.push({
      id: album.id,
      title: album.title,
      path: album.path,
      alt: album.alt,
      city: album.city,
      year: album.year,
      linkVideo: album.linkVideo,
      artist: album.artist,
      players: album.players,
      tracklistA: album.tracklistA,
      tracklistB: album.tracklistB,
      about: {
        gift: album.about.gift,
        date: album.about.date,
        comments: album.about.comments
      }
    });
  }

  updateAlbum(album: AlbumModel) {
    this.albumList.update(album.$key, {
      id: album.id,
      title: album.title,
      path: album.path,
      alt: album.alt,
      city: album.city,
      year: album.year,
      linkVideo: album.linkVideo,
      artist: album.artist,
      players: album.players,
      tracklistA: album.tracklistA,
      tracklistB: album.tracklistB,
      about: {
        gift: album.about.gift,
        date: album.about.date,
        comments: album.about.comments
      }
    });
  }

  deleteAlbum($key: string) {
    this.albumList.remove($key);
  }
}
