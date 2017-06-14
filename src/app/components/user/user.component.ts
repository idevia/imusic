import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoundCloudService } from '../../services/soundcloud.service';

import { User } from '../../models/user';
import { Playlist } from '../../models/playlist';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  user: User[];
  playlists: Playlist[];
  constructor(private _soundcloudService: SoundCloudService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this._soundcloudService.getUser(id)
            .subscribe(user => {
              this.user = user;
            })

          this._soundcloudService.getUserPlaylists(id)
            .subscribe(playlists => {
              this.playlists = playlists;
            })
        })
  }

}
