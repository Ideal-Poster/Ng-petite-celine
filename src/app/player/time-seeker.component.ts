import {Component, ElementRef, OnInit, Input} from '@angular/core';
import {SoundManager} from '../services/soundmanager.service';
import {Events} from '../interfaces/events.model';

@Component({
  selector: 'time-seeker',
  template: `
		<div class='ml-5' id="timeSlider" (click)='changePlaybackTime($event)'>
				<div id='sliderHandler' tabindex="0" [style.width.px]="calculatePositionByTime()" [style.top.px]="1"></div>
		</div>
	`,
	styles: [`
		#sliderHandler {
			position: absolute;
			background: #55AAA0;
		}

		#timeSlider{
			position: relative;
		}

		#timeSlider{
			position: relative;
			height:4px;
			background-color: transparent;
			background-image:none;
			border:none;
			width: 100vw;
			left: 16px;
			float: right;
			cursor: pointer !important;
		}

		#sliderHandler{
			position: absolute;
			// border-radius: 100px;
			// background-image: none !important;
			// background-color: #fff !important;
			// border:1px solid #ff8b00 !important;
			top: 0 !important;
			height:4px !important;
			box-sizing: border-box;
		}
	`]
})
export class TimeSeekerCmp implements OnInit {
  @Input() time: number;
  @Input('total-time') duration: number;

  constructor(private soundManager: SoundManager,
    private element: ElementRef) {

  }

  calculatePositionByTime() {
    var percent = this.time * 100 / this.duration;
    var pos = percent * this.getTimeSliderWidth() / 100;
    return pos;
  }

  ngOnInit() {
    var offset = this.element.nativeElement.getBoundingClientRect();
    var width = this.element.nativeElement.style.width;
    var height = this.element.nativeElement.style.height;
  }


  changePlaybackTime($event) {
    var time = this.calculateTimePercentOnClick($event);
    this.soundManager.seek(time);
  }

  private calculateTimePercentOnClick($event) {
    var parentX = this.getTimeSliderWidth();
    var percent = $event.x * 100 / parentX;
    return percent;
  }

  private getTimeSliderWidth() {
    return parseInt(this.element.nativeElement.children[0].clientWidth);
  }
}

