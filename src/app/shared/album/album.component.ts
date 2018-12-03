import { Component, Input } from '@angular/core';
import { AlbumModel } from '../../model/album.model';

import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'collection-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  @Input() album: AlbumModel;

  constructor(private albumService: AlbumService) { }

  onEdit(album: AlbumModel) {
    this.albumService.selectedAlbum = Object.assign({}, album);
  }

  onViewDetails(album: AlbumModel) {
    this.albumService.selectedAlbum = Object.assign({}, album);
  }

  onDeleteAlbum($key: string) {
    if (confirm(`¿Estás seguro que quieres eliminar el disco ${$key}?`)) {
      this.albumService.deleteAlbum($key);
    }
  }
}
