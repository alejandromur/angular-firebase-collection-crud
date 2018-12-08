import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MainComponent } from './shared/main/main.component';
import { AsideComponent } from './shared/aside/aside.component';
import { AlbumService } from './services/album.service';
import { SortPipe } from './shared/sort.pipe';
import { ValuesPipe } from './shared/values.pipe';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumComponent } from './shared/album/album.component';
import { AlbumsListComponent } from './pages/albums/list/albums-list.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AlbumsNewComponent } from './pages/albums/new/albums-new.component';
import { AlbumsDetailsComponent } from './pages/albums/details/albums-details.component';

const routes: Routes = [{
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
}];

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
    SortPipe,
    ValuesPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    AlbumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
