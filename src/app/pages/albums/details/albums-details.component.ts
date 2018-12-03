import { Component } from '@angular/core';

import { AlbumModel } from '../../../model/album.model';
import { AlbumService } from '../../../services/album.service';

@Component({
  selector: 'albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.scss']
})
export class AlbumsDetailsComponent {

  album: AlbumModel;

  constructor(private albumService: AlbumService) {
    this.album = this.albumService.selectedAlbum;
  }
}
