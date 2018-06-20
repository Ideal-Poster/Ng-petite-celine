import {Component, Input} from '@angular/core';
import {SoundManager} from '../services/soundmanager.service';
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
  styles: [``]
})

export class ControlsComponent {
  @Input('is-playing') isPlaying: boolean;
  @Input() song: any;

  constructor(private soundManager: SoundManager) {}

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
