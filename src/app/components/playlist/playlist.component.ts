import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoundCloudService } from '../../services/soundcloud.service';
import { AppComponent } from '../../app.component';

import { Track } from '../../models/track';
import { Playlist } from '../../models/playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlist: Playlist[];
  app : any;
  constructor(private _soundCloudService: SoundCloudService, private _route: ActivatedRoute, private _inj: Injector) {
    this.app = this._inj.get(AppComponent);
  }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._soundCloudService.getPlaylist(id)
          .subscribe(playlist => {
            this.playlist = playlist;
          })
      })
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
