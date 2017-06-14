import { Component, ViewChild } from '@angular/core';
import { SoundCloudService } from './services/soundcloud.service';
import { Track } from './models/track';
import { SearchComponent } from './components/search/search.component';
// import { PlaylistComponent } from './playlist/playlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SoundCloudService ],
})

export class AppComponent {
  track: Track;
  nowPlayingList: Track[] = [];

  constructor (private _soundcloudService: SoundCloudService) {

  }

  onPlayThisSong(track) {
    this.track = track;
  }

  onMediaEnded(track) {
    var currentTrackIndex = this.nowPlayingList.findIndex(t => t.id == track.id);
    var nextTrack = this.nowPlayingList[currentTrackIndex+1];
    if(nextTrack) {
      this.track = nextTrack;
    }
  }
}
