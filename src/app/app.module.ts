import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { environment } from '../environments/environment';

import { ReactiveFormsModule } from '@angular/forms';

import { SortPipe } from './shared/sort.pipe';
import { ValuesPipe } from './shared/values.pipe';
import { FileSizePipe } from './shared/file-size.pipe';

import { AlbumService } from './services/album.service';
import { DropZoneDirective } from './directives/drop-zone.directive';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './shared/main/main.component';
import { AsideComponent } from './shared/aside/aside.component';
import { FileUploadComponent } from './shared/file-upload/file-upload.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumComponent } from './shared/album/album.component';
import { AlbumsListComponent } from './pages/albums/list/albums-list.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AlbumsNewComponent } from './pages/albums/new/albums-new.component';
import { AlbumsDetailsComponent } from './pages/albums/details/albums-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    MainComponent,
    AlbumComponent,
    WelcomeComponent,
    AlbumsNewComponent,
    AlbumsDetailsComponent,
    AlbumsListComponent,
    NotFoundComponent,
    AlbumsComponent,
    FileUploadComponent,
    SortPipe,
    ValuesPipe,
    DropZoneDirective,
    FileSizePipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [
    AlbumService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
