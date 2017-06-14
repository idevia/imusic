import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { UsertracksComponent } from './components/usertracks/usertracks.component';

export const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent},
    { path: 'user/:id', component: UserComponent},
    { path: 'user/:uid/playlist/:id', component: PlaylistComponent},
    { path: 'user/:uid/tracks', component: UsertracksComponent},
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);