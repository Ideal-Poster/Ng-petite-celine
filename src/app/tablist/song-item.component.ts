import {Component, Input} from "@angular/core";
import {PlaylistService} from "../services/playlist.service";
import {Song} from "../interfaces/song.model";
import {SoundManager} from "../services/soundmanager.service";
import {consts} from "../app.consts";

@Component({
	selector: 'song-item',
	template: `
		<div class="song-list-information-column">
				<div class="playlist-item-title"
						(click)='play(song)'
						title="Play">{{song.name}}</div>
		</div>
	`,
	styles: [`
		.song-item{
				border-top:1px solid #cfcfcf;
				padding: 7px 12px 7px 0px;
				overflow: hidden;
		}

		.song-item:hover,
		.musicchart > .media:hover, .song-item.active{
				background-color: #EBEBEB;
		}

		.song-item:first-child{
				border-top:none;
		}

		.song-list-information-column {
				padding-left: 5px;
				padding-right: 5px;
		}

		.playlist-item-control-group{
				padding-left: 5px;
				padding-right: 5px;
		}

		.playlist-item-control-group i{
				color: #8D8D8D;
				font-size: 16px;
		}

		.playlist-item-control-group i:hover{
			color: #a18d93;
		}

		.icon-play {
				background-image: url(${consts.baseUrl}images/icon-play.png);
				background-size: 20px;
				width: 20px;
				height: 20px;
		}

		.icon-share {
				background-image: url(${consts.baseUrl}images/icon-share.png);
				background-size: 20px;
				width: 20px;
				height: 20px;
		}

		.icon-sound {
				background-image: url(${consts.baseUrl}images/sound_click.png);
				background-size: 20px;
				width: 20px;
				height: 15px;
		}

		.icon-remove {
				background-image: url(${consts.baseUrl}images/remove.png);
				background-size: 20px;
				width: 20px;
				height: 20px;
		}
		.icon-add {
			background-image: url(${consts.baseUrl}images/icon-add.png);
			background-size: 20px;
			width: 20px;
			height: 20px;
		}

		.playlist-item-image{
			width: 60px;
			cursor: pointer;
			border-radius: 5px;
		}
		`]
})
export class SongItemCmp
{
	@Input('playing-song') playingSong = null;

	@Input() song;

	@Input("show-add") showAdd: boolean;

	@Input("show-delete") showDelete: boolean;

	@Input("show-play") showPlay: boolean;

	constructor(private playlistService: PlaylistService,
							private soundManager: SoundManager) {

	}

	addSongToPlaylist(song: Song) {
		this.playlistService.add(song);
	}

	play(song: Song) {
		this.soundManager.play(song);
	}

	delete(song) {
		this.playlistService.remove(song);
	}

	getSongImage(song: Song) {
		if (song.imageUrl != null) {
			return song.imageUrl;
		}
		return consts.baseUrl+'/images/artist_placeholder.png';
	}

}