import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SoundCloudService {
  private searchUrl: string;
  private userUrl: string;
  private playlistsUrl: string;
  private playlistUrl: string;
  private trackUrl: string;
  private userTracksUrl: string;

  private clientId: string = '74140c440d1ee99c8e12778f5d5bc91b';
  constructor( private _http:Http) {

   }

   searchMusic(str: string) {
     str = str.replace(' ', '+');
     this.searchUrl = 'https://api.soundcloud.com/tracks?q=' + str + '&client_id=' + this.clientId + '&limit=50';
     return this._http.get(this.searchUrl)
        .map(res => res.json());
   }

   getUser(id: string) {
     this.userUrl = 'https://api.soundcloud.com/users/'+ id + '?client_id=' + this.clientId;
     return this._http.get(this.userUrl)
       .map(res => res.json());
   }

   getUserPlaylists(id: string) {
     this.playlistsUrl = 'https://api.soundcloud.com/users/' + id + '/playlists?client_id=' + this.clientId;
     return this._http.get(this.playlistsUrl)
       .map(res => res.json());
   }

   getPlaylist(id: string) {
     this.playlistUrl = 'https://api.soundcloud.com/playlists/' + id + '?client_id=' + this.clientId;
     return this._http.get(this.playlistUrl)
       .map(res => res.json());
   }

   getUserTracks(id: string) {
     this.userTracksUrl = 'https://api.soundcloud.com/users/' + id + '/tracks?client_id=' + this.clientId;
     return this._http.get(this.userTracksUrl)
        .map(res => res.json());
   }

   getStreamUrl(url: string) {
      return url + '?client_id=' + this.clientId;
   }

   getSingleTrack(id: string) {
     this.trackUrl = 'https://api.soundcloud.com/tracks/' + id + '?client_id=' + this.clientId;
     return this._http.get(this.trackUrl)
       .map(res => res.json());
   }

  //  getTracksFromPlaylist(id: string) {
  //   //  this.trackUrl = 'https://api.soundcloud.com/tracks/26487927?client_id=74140c440d1ee99c8e12778f5d5bc91b';
  //    this.trackUrl = 'https://api.soundcloud.com/tracks/' + id + '?client_id=' + this.clientId;
  //    console.log(this.trackUrl);
  //    return this._http.get(this.trackUrl)
  //      .map(res => res.json());
  //  }

}
