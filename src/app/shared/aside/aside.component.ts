import { Component } from '@angular/core';

import { AlbumService } from '../../services/album.service';
import { AlbumModel } from '../../model/album.model';

@Component({
  selector: 'collection-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  constructor(private albumService: AlbumService) { }

  resetForm() {
    this.albumService.selectedAlbum = new AlbumModel();
  }
}
