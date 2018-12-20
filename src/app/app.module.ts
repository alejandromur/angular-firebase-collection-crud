import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { environment } from '../environments/environment';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SortPipe } from './shared/sort.pipe';
import { ValuesPipe } from './shared/values.pipe';
import { FileSizePipe } from './shared/file-size.pipe';

import { AlbumService } from './services/album.service';
import { DropZoneDirective } from './directives/drop-zone.directive';

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

const routes: Routes = [
  {
    path: 'album',
    component: AlbumsComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'list',
        component: AlbumsListComponent
      },
      {
        path: 'new',
        component: AlbumsNewComponent
      },
      {
        path: 'edit/:id',
        component: AlbumsNewComponent
      },
      {
        path: ':id',
        component: AlbumsDetailsComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'album/welcome'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

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
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AlbumService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
