import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetGifsService {
  GifApiURL = "https://api.giphy.com/v1/gifs/search";
  TrendingGifURL = "https://api.giphy.com/v1/gifs/trending";
  gifList: any;
  API_Key = "1BXtg8Ss1JNjYlB2ru7NZDRdQsJ8GIsI";

  constructor(private http: HttpClient) { }
  public getGifList(searchtext) {
    const params = new HttpParams()
      .set('api_key', this.API_Key)
      .set('q', searchtext)
      .set('offset', '0')
      .set('limit', '100');
    return new Promise(resolve => {
      this.http.get(this.GifApiURL, { params }).subscribe(data => {
        resolve(data);
        this.gifList = data;
        //console.log(this.gifList.data);
      }, err => {
        console.log(err);
      });
    });
  }
  public loadTrendingGifs() {
    const params = new HttpParams()
      .set('api_key', this.API_Key)
      .set('rating', 'G')
      .set('random_id', 'e826c9fc5c929e0d6c6d423841a282aa')
      .set('offset', '0')
      .set('limit', '100');
    return new Promise(resolve => {
      this.http.get(this.TrendingGifURL, { params }).subscribe(data => {
        resolve(data);
        this.gifList = data;
        console.log('under trending gifs');
        console.log(this.gifList.data);
      }, err => {
        console.log(err);
      });
    });
  }
}
