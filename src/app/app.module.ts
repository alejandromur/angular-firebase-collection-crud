import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './shared/main/main.component';
import { AsideComponent } from './shared/aside/aside.component';
import { AlbumComponent } from './components/album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    FooterComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
