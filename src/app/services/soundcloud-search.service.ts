import { PlaylistService } from './playlist.service';
import {Injectable} from '@angular/core';
import {Song} from '../interfaces/song.model';
import {ISearch} from '../interfaces/isearch.model';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class SoundCloudSearch implements ISearch {

  private clientId = '8e1349e63dfd43dc67a63e0de3befc68';
  private playlistUri = 'https://api.soundcloud.com/playlists/50986230?linked_partitioning=1&client_id=' + this.clientId;
  tracks = [
    {
      stream_url: '../../assets/audio/Words.mp3',
      title: 'Words',
      artist: 'Petite Celine',
      provider: 1,
      duration: 320735,
      index: 0
    },
    {
      stream_url: '../../assets/audio/One More Shot.mp3',
      title: 'One More Shot',
      artist: 'Petite Celine',
      provider: 1,
      duration: 222975,
      index: 1
    },
    {
      stream_url: '../../assets/audio/Reason & Rhyme.mp3',
      title: 'Reason & Rhyme',
      artist: 'Petite Celine',
      provider: 1,
      duration: 246853,
      index: 2
    },
    {
      stream_url: '../../assets/audio/Demain.mp3',
      title: 'Demain',
      artist: 'Petite Celine',
      provider: 1,
      duration: 200038,
      index: 3
    },
    {
      stream_url: '../../assets/audio/After All.mp3',
      title: 'After All',
      artist: 'Petite Celine',
      provider: 1,
      duration: 238352,
      index: 4
    },
    {
      stream_url: '../../assets/audio/Quicksand.mp3',
      title: 'Quicksand',
      artist: 'Petite Celine',
      provider: 1,
      duration: 263573,
      index: 5
    },
    {
      stream_url: '../../assets/audio/The Fall.mp3',
      title: 'The Fall',
      artist: 'Petite Celine',
      provider: 1,
      duration: 263573,
      index: 6
    },
    {
      stream_url: '../../assets/audio/Young Soldier.mp3',
      title: 'Young Soldier',
      artist: 'Petite Celine',
      provider: 1,
      duration: 380300,
      index: 7
    }
  ];
  constructor(private http: Http) {}

  search(keyword: string): any {
    const uri = this.playlistUri;


    // console.log(
    //   this.http.get(uri)
    // .map(res => this.handleResponse(res))
    // );

    return this.http.get(uri)
      .map(res => this.handleResponse(res));
  }

  handleResponse(res: any): any {
    const data = res.json();
    const result = [];
    let index = 0;
    if (data && data.tracks) {
      console.log(data);


      this.tracks.forEach(function (item) {
        const song: Song = < Song > {};
        song.streamUrl = item.stream_url;
        song.name = item.title;
        song.artist = item.artist;
        song.provider = 1;
        // song.idFromProvider = item.id;
        song.duration = item.duration;
        // song.imageUrl = item.artwork_url;
        // song.link = item.permalink_url;
        song.index = index;
        result.push(song);
        index++;
      });
    }

    return result;

  }

  handleError(e: Response) {
    console.log(e);
  }

}
