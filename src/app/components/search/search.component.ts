import { Component, OnInit, Output, EventEmitter, Injector } from '@angular/core';
import { SoundCloudService } from '../../services/soundcloud.service';
import { PlayerComponent } from '../player/player.component';
import { AppComponent } from '../../app.component';

import { Track } from '../../models/track';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SoundCloudService ],

})

export class SearchComponent implements OnInit {
  searchStr:string;
  searchResults: Track[];
  selectedTrack: Track[];
  app: any;
  searchMusic() {
    this._soundCloudService.searchMusic(this.searchStr)
      .subscribe(res => {
        if(this.searchStr === '') {
          this.searchResults = [];
        } else {

          for(let result of res) {
            result.genre = (result.genre) ? result.genre.split(',') : ['N/A'];
          }
          this.searchResults = res;
        }
      })
  }

  constructor(private _soundCloudService: SoundCloudService, private _inj:Injector) {
      let parentComponent = this._inj.get(AppComponent);
      this.app = parentComponent;
  }

  ngOnInit() {
  }

  stream(id: string) {
    
    this._soundCloudService.getSingleTrack(id)
      .subscribe(res => {
        res.stream_url = this._soundCloudService.getStreamUrl(res.stream_url);
        this.app.track = res;
        this.app.nowPlayingList.push(res);
      })
  }

  AddToNowPlaying(id: string) {
    this._soundCloudService.getSingleTrack(id)
      .subscribe(res => {
        res.stream_url = this._soundCloudService.getStreamUrl(res.stream_url);
        this.app.nowPlayingList.push(res);
      })
  }

}
