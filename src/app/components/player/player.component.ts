import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Track } from '../../models/track';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  inputs: ['track', 'nowPlayingList']
})
export class PlayerComponent implements OnInit {
  minimized: boolean = false;
  track :any;
  constructor() { }

  ngOnInit() {

  }

  @Output() onPlayThisSong = new EventEmitter<Track>();
  @Output() onMediaEnded = new EventEmitter<Track>();

  playThisSong(track) {
    this.onPlayThisSong.emit(track);
  }

  mediaEnded(track) {
    this.onMediaEnded.emit(track);
  }

  minimize() {
    this.minimized = true;
  }
  maximize() {
    this.minimized = false;
  }


}
