import { Component, OnInit } from '@angular/core';
import { AlbumModel } from 'src/app/model/album.model';
import { AlbumService } from '../../../services/album.service';

@Component({
  selector: 'albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  albumsList: AlbumModel[];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    // console.log('pido discos');
    this.albumService.getAlbums().snapshotChanges().subscribe(item => {
      this.albumsList = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        // console.log(x['id']);
        x['$key'] = element.key;
        this.albumsList.push(x as AlbumModel);
      });
    });
  }
}
