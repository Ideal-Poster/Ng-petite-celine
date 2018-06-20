import {Component, Input} from "@angular/core";
//import {Song} from './interfaces/Song.ts';
import {Events} from '../interfaces/events.model';
import {SoundManager} from '../services/soundmanager.service';
import {PlaylistService} from '../services/playlist.service';
import { consts } from '../app.consts';

@Component({
  selector: 'controls',
  template: `
		<div class='controls row pt-2 pr-3'>
			<a id="btnPrevious" title="" (click)='previous()'>
				<i class='fa fa-backward' aria-hidden="true"></i>
			</a>
			<a class='pl-2' id="btnPlayPause" (click)='togglePlayPause()'>
					<div [hidden]='!isPlaying'>
						<i class="fa fa-pause" aria-hidden></i>
					</div>
					<div [hidden]='isPlaying'>
						<i class="fa fa-play" aria-hidden ></i>
					</div>
			</a>
			<a class='pr-3 pl-2' id="btnNextSong" (click)='next()'>
				<i class="fa fa-forward" aria-hidden="true"></i>
			</a>
		</div>
	`,
  styles: [
    `
		.controls > * {
			color: white;
		}
		#btnPrevious{
				margin-right: 2px;
		}
		#btnPrevious img {
				width:30px;
				height:30px;
				margin-top:4px;
		}

		#btnPlayPause{
				box-sizing: border-box;
				margin-right: 2px;
		}

		#btnPlayPause img{
				width:40px;
				height:40px;
		}

		#btnNextSong{
				position: relative;
				box-sizing: border-box;
		}

		#btnNextSong img{
				margin-top: 4px;
				width: 30px;
				height: 30px;
		}
`
  ]
})
export class ControlsComponent {
  @Input("is-playing") isPlaying: boolean;
  @Input() song: any;

  constructor(private soundManager: SoundManager) {

  }

  togglePlayPause() {
    this.soundManager.togglePlayPause();
  }

  next() {
    this.soundManager.next();
  }

  previous() {
    this.soundManager.previous();
  }
}
