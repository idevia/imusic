import { User } from './user';

export class Track{
    id: number;
    title: string;
    genre: any;
    stream_url: string;
    waveform_url: string;
    original_content_size: number;
    original_format: string;
    duration: number;
    user: User[];
    artwork_url: string;
}