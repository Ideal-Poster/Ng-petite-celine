import {Component, OnInit} from '@angular/core';
import {SoundManager} from '../services/soundmanager.service';

import {Song} from '../interfaces/song.model';
import {Events} from '../interfaces/events.model';

import { ControlsComponent } from './controls.component';
import { VolumeComponent } from './volume.component';

import { TimeSeekerComponent } from './time-seeker.component';
import { TimeInfoComponent } from './time-info.component';

@Component({
  selector: 'player',
  template: `
	<div class="container-fluid fixed-top grey darken-4" [hidden]='!isPlaying && !isTouched'>
		<div class="container">
			<section class="player" style="height:55px">
				<div class="row">
					<div>
						<controls [song]="song" [is-playing]="isPlaying"></controls>
					</div>
					<div class="pl-3 pt-2">
						<time-info [song]="song" [time]="currentTime" [total-time]="totalTime"></time-info>
					</div>
					<div class="pl-3 pt-2">
						<h2 class='px-3 song-title' style='color: white;' *ngIf='song'>{{ song.name }} - {{ song.artist }}</h2>
					</div>
				</div>
			</section>
		</div>
		<time-seeker [time]="currentTime" [total-time]="totalTime"></time-seeker>
	</div>
	`,
  styles: [`
	:host {
		// position: fixed;
		z-index: 10;
	}

	.player{
		padding-top:7px;
		padding-left:7px;
		padding-bottom: 18px;
		padding-right: 7px;
		// background-color: #fff;
		// width: 100vw;
	}

	.song-title {
		font-size: 14px;
		margin-top:4px;
		padding-bottom: 0;
		color:#000;
		margin-bottom: 7px;
	}

	.song-artist2
		font-size: 13px;
		margin-top: 6px;
		color:#939393;
	}
	.player-info {
		padding-left:0;
	}

	.controllerGroup{
		display: block;
		margin-top: 15px;
	}

	.controllerGroup a {
		text-decoration: none;
		outline: none;
	}

	.controllerGroup a:focus {
		text-decoration: none;
		outline: none;
	}

	`],
})
export class PlayerComponent implements OnInit {
  public song: Song;
  isPlaying: boolean;
  isTouched = false;
  currentTime: number;
  totalTime: number;
  private soundManager: SoundManager;

  constructor(soundManager: SoundManager) {
    this.song = null;
    this.soundManager = soundManager;
    this.soundManager.on(Events.ChangeSong, (song) => {
      this.song = song;
      this.totalTime = this.soundManager.getTotalTime();
    });
  }

  ngOnInit() {
    this.soundManager.on(Events.Pause, () => {
      this.isPlaying = false;
    });

    this.soundManager.on(Events.Play, () => {
      this.isPlaying = true;
      this.isTouched = true;
    });


    this.soundManager.on(Events.PlayResume, () => {
      this.isPlaying = true;
    });

    this.soundManager.on(Events.Time, (time) => {
      this.currentTime = time;
      this.totalTime = this.soundManager.getTotalTime();
    });
  }

}

