import { Component, OnInit } from '@angular/core';
import { AlbumModel } from '../../model/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'collection-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  albumsList: AlbumModel[];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbums().snapshotChanges().subscribe(item => {
      this.albumsList = [];
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.albumsList.push(x as AlbumModel);
      });
    });
  }
}
