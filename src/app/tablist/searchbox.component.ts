import {Component, EventEmitter, Output, Input} from '@angular/core';
import {ISearch} from '../interfaces/isearch.model';
import {consts} from '../app.consts';
import {PlaylistService} from '../services/playlist.service';
import {Song} from '../interfaces/song.model';
import {SoundCloudSearch} from '../services/soundcloud-search.service';
import { NgForm  } from '@angular/forms';
import {SongItemCmp} from '../tablist/song-item.component';

@Component({
  selector: 'search-box',
  entryComponents: [SongItemCmp],
  template: `
	<div>
		<song-item *ngFor="let song of searchResult" [song]="song" [show-add]="true" [show-play]="true"></song-item>
	</div>
	`,
  styles: [`
	#searchbox {
		padding: 10px 10px 0 6px;
	}

	span.icon-search{
		background-image: url(${consts.baseUrl}images/icon-search.png);
		background-size: 17px;
		position: absolute;
		width: 17px;
		height: 16px;
		top: 8px;
		left: 21px;
	}

	button.search,
	input#form-field-search{
		border-radius: 5px;
		border: 1px solid #ccc;
		color: #363636;
		box-shadow: none;
		padding: 6px 30px;
		height: 32px;
	}

	button.search{
		background: #ffc803;
	}

	#searchResult{
		margin: 0 5px 0 7px;
	}

	#search-help{
			opacity: 0.8
	}
	#search-help img{
			margin-left:40px;
			margin-bottom: 15px;
	}

	#search-help p{
			text-align: center;
	}
	`]
})
export class SearchBoxCmp {

  searchResult: any = [];
  private searchClient: ISearch;
  private showAdd: boolean = true;
  // playlistService: PlaylistService;
  data: Array < any > ;

  constructor(private playlistService: PlaylistService, private soundCloudSearch: SoundCloudSearch) {
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
  }

  retrievePlaylist() {

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

