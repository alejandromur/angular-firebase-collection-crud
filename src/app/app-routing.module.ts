import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AlbumsComponent } from './pages/albums/albums.component';
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
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome'
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
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
