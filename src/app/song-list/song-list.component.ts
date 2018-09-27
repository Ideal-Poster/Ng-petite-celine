import { OnInit } from '@angular/core';
// import { element } from 'protractor';
import { SoundManager } from './../services/soundmanager.service';
import { Component } from '@angular/core';
import { ISearch } from '../interfaces/isearch.model';
import { PlaylistService } from '../services/playlist.service';
import { Song } from '../interfaces/song.model';
import { SoundCloudSearch } from '../services/soundcloud-search.service';
@Component({
  selector: 'song-list',
  template: `
		<div *ngFor="let song of searchResult let i = index;" id="tracks" [song]="song">
      <div id="track{{i}}"
      class="track"
			(click)='play(song)'
			title="Play">{{song.name}}</div>
    </div>
	`,
  styles: [`
    #track0:hover,
    #track1:hover,
    #track2:hover,
    #track3:hover,
    #track4:hover,
    #track5:hover,
    #track6:hover,
    #track7:hover,
    #track8:hover,
    #track9:hover,
    #track0:hover {
      color: white;
      cursor: pointer;
    }
    .active {
      color: white;
    }
    .inactive {
      color: grey;
    }
  `]
})

export class SongListComponent implements OnInit {
  private searchClient: ISearch;
  searchResult: any = [];
  data: Array < any > ;
  // prevSong: Song;
  // lastSongPlayed: number;

  constructor(private playlistService: PlaylistService, private soundCloudSearch: SoundCloudSearch, private soundManager: SoundManager) {
    // this.playlistService = playlistService;

    this.search('e');
    this.playlistService
      .getAll()
      .subscribe(playlistData => {
        this.data = playlistData;
      });
    this.playlistService.publishChanges();
    setTimeout(() => {
      // console.log(this.searchResult);
      this.searchResult.forEach(element => {
        this.playlistService.add(element);
      });
    }, 1000);
  }

  ngOnInit() {

  }

  play(song: Song) {
    console.log(this.soundManager.getCurrentSong);

    // if (!this.prevSong || this.prevSong.name !== song.name) {
      this.soundManager.play(song);
    // }


    // this.prevSong = song;
  }

  search(keyword: string) {
    this.soundCloudSearch
      .search(keyword)
      .subscribe(data => {
        this.searchResult = data;
      });
  }

  // onSubmit(f: NgForm) {
  //   console.log(f);
  //   return this.search(f.value.query);
  // }
}
