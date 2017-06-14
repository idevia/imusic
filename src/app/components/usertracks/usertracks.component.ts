import { Component, OnInit, Injector } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ActivatedRoute } from '@angular/router';
import { SoundCloudService } from '../../services/soundcloud.service';
import { Track } from '../../models/track';
import { User } from '../../models/user';

@Component({
  selector: 'app-usertracks',
  templateUrl: './usertracks.component.html',
  styleUrls: ['./usertracks.component.css']
})
export class UsertracksComponent implements OnInit {
  tracks: Track[];
  user: User;
  app: any;

  constructor(private _soundCloudService: SoundCloudService, private _route: ActivatedRoute, private _inj: Injector) {
    this.app = this._inj.get(AppComponent);
  }

  ngOnInit() {
    this._route.params
      .map(params => params['uid'])
      .subscribe((uid) => {
        this._soundCloudService.getUserTracks(uid)
          .subscribe(tracks => {
            this.tracks = tracks;
          })
        this._soundCloudService.getUser(uid)
          .subscribe(user => {
            this.user = user;
          })
      })
  }

  stream(id: string){
    this._soundCloudService.getSingleTrack(id)
      .subscribe(res => {
        res.stream_url = this._soundCloudService.getStreamUrl(res.stream_url);
        this.app.track = res;
        this.app.nowPlayingList.push(res);
      })
  }
  AddToNowPlaying(id: string){
    this._soundCloudService.getSingleTrack(id)
      .subscribe(res => {
        res.stream_url = this._soundCloudService.getStreamUrl(res.stream_url);
        this.app.nowPlayingList.push(res);
      })
  }

}
