import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlbumModel } from '../../../model/album.model';
import { AlbumService } from '../../../services/album.service';

@Component({
  selector: 'albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.scss']
})
export class AlbumsDetailsComponent {

  album: AlbumModel;
  listRoute: Array<any> = [];

  constructor(
    private albumService: AlbumService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.album = this.albumService.selectedAlbum;
  }

  onDeleteAlbum($key: string) {
    if (confirm(`¿Estás seguro que quieres eliminar el disco ${$key}?`)) {
      this.albumService.deleteAlbum($key);
      this.listRoute.push('../list');
      this.router.navigate(this.listRoute, {
        relativeTo: this.activatedRoute
      });
    }
  }
}
