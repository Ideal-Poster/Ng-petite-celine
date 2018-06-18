import { SoundManager } from './../services/soundmanager.service';
import { Component } from '@angular/core';
import { ISearch } from '../interfaces/isearch.model';
import { consts } from '../app.consts';
import { PlaylistService } from '../services/playlist.service';
import { Song } from '../interfaces/song.model';
import { SoundCloudSearch } from '../services/soundcloud-search.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'search-box',
  template: `
	<div>
    <div *ngFor="let song of searchResult" [song]="song" [show-add]="true" [show-play]="true">
      <div class="track{{i}}"
      (click)='play(song)' title="Play">{{song.name}}</div>
    </div>
	</div>
	`,
  styles: [``]
})
export class SearchBoxComponent {

  searchResult: any = [];
  private searchClient: ISearch;
  private showAdd: boolean = true;
  // playlistService: PlaylistService;
  data: Array < any > ;

  constructor(private playlistService: PlaylistService, private soundCloudSearch: SoundCloudSearch, private soundManager: SoundManager) {
    this.playlistService = playlistService;

    /*this.keyword.valueChanges
    			.debounceTime(400)
    			.distinctUntilChanged()
    			.flatMap(keywordStr => this.soundCloudSearch.search(keywordStr.toString()))
    			.subscribe(data => {
    				this.searchResult = data;
    			});*/
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

  retrievePlaylist() {

  }

  play(song: Song) {
    this.soundManager.play(song);
  }

  search(keyword: string) {
    this.soundCloudSearch
      .search(keyword)
      .subscribe(data => {
        this.searchResult = data;
      });
  }

  onSubmit(f: NgForm) {
    console.log(f);
    return this.search(f.value.query);
  }
}
