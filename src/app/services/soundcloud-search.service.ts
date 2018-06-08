import {Injectable} from '@angular/core';
import {Song} from '../interfaces/song.model';
import {ISearch} from '../interfaces/isearch.model';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class SoundCloudSearch implements ISearch {

  private clientId: string = '8e1349e63dfd43dc67a63e0de3befc68';
  private playlistUri = 'http://api.soundcloud.com/playlists/50986230?linked_partitioning=1&client_id=' + this.clientId;
  constructor(private http: Http) {}

  search(keyword: string): any {
    var uri = this.playlistUri;

    return this.http.get(uri)
      .map(res => this.handleResponse(res))
  }

  handleResponse(res: any): any {
    var data = res.json();
    var result = [];
    if (data && data.tracks) {
      data.tracks.forEach(function (item) {
        var song: Song = < Song > {};
        song.streamUrl = item.stream_url;
        song.name = item.title;
        song.artist = item.user.username;
        song.provider = 1;
        song.idFromProvider = item.id;
        song.duration = item.duration;
        song.imageUrl = item.artwork_url;
        song.link = item.permalink_url;
        result.push(song);
      });
    }
    return result;
  }

  handleError(e: Response) {
    console.log(e);
  }

}