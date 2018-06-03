import { Component, Input } from '@angular/core';
import { AlbumModel } from '../../model/album.model';

@Component({
  selector: 'collection-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  @Input() album: AlbumModel;
}
