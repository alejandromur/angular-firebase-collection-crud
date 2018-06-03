import { NgModule } from '@angular/core';
import { AlbumComponent } from '../../components/album/album.component';
import { AlbumModule } from '../../components/album/album.module';

@NgModule({
  declarations: [
    AlbumModule
  ],
  imports: [
    AlbumModule
  ]
})
export class MainModule { }
