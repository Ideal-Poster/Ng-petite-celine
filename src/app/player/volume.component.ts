import {Component} from '@angular/core';
import {SoundManager} from '../services/soundmanager.service';
import {Events} from '../interfaces/events.model';
import {consts} from '../app.consts';

@Component({
  selector: 'volume',
  template: `
		<a id="btnToggleVolume" href='#' (click)='toggleMute()'>
			<img src='${consts.baseUrl}images/sound.png' [hidden]='isMute'/>
			<img src='${consts.baseUrl}images/mute.png' [hidden]='!isMute'/>
		</a>
	`,
  styles: [``]
})

export class VolumeComponent {
  isMute = false;

  constructor(private soundManager: SoundManager) {
    this.soundManager.on(Events.Volume, (isMute) => {
      this.isMute = isMute;
    });
  }

  toggleMute() {
    this.soundManager.toggleMute();
  }
}
