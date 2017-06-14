import { Track } from './track';

export class Playlist {
    id: string;
    duration: number;
    title: string;
    description: string;
    tracks: Track[];
}