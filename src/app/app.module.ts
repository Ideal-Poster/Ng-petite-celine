import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HttpErrorHandler } from '../http-error-handler.service';
import { MailChimpApiService } from './services/mail-chimp-api.service';

import { MessageService } from '../message.service';

import { MusicPageComponent } from './music-page/music-page.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ArtPageComponent } from './art-page/art-page.component';

import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { MDBSpinningPreloader } from './typescripts/pro/index';

import { FooterComponent } from './footer/footer.component';
import { ActingPageComponent } from './acting-page/acting-page.component';

import {PlaylistService} from './services/playlist.service';
import {SoundCloudSearch} from './services/soundcloud-search.service';
import {SoundManagerSoundPlayer} from './services/soundmanager-player.service';
import {SoundManager} from './services/soundmanager.service';
import {PlayerCmp} from './player/player.component';
import {TabListCmp} from './tablist/tablist.component';
import {StoreService} from './services/store.service';
import {PlaylistCmp} from './tablist/playlist.component';
import {ControlsCmp} from "./player/controls.component";
import {VolumeCmp} from './player/volume.component';
import {SongImageCmp} from './player/song-image.component';
import {SongItemCmp} from './tablist/song-item.component';
import {TimeSeekerCmp} from './player/time-seeker.component';
import {TimeInfoCmp} from './player/time-info.component';
import {SearchBoxCmp} from './tablist/searchbox.component';

import 'rxjs/Rx';

const appRoutes: Routes = [
  { path: '', component: MusicPageComponent },
  { path: 'art', component: ArtPageComponent },
  { path: 'acting', component: ActingPageComponent },
  { path: '', redirectTo: '/music ', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MusicPageComponent,
    NavMenuComponent,
    ArtPageComponent,
    FooterComponent,
    ActingPageComponent,
    PlaylistCmp,
    SearchBoxCmp,
    TabListCmp,
    SongItemCmp,
    PlayerCmp,
    ControlsCmp,
    VolumeCmp,
    SongImageCmp,
    TimeSeekerCmp,
    TimeInfoCmp
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false
    }),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    MailChimpApiService,
    HttpErrorHandler,
    MessageService,
    MDBSpinningPreloader,
    SoundCloudSearch,
    PlaylistService,
    SoundManagerSoundPlayer,
    SoundManager,
    StoreService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
