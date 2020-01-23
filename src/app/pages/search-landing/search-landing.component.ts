import { Component, OnInit } from '@angular/core';
import { GetGifsService } from '../../service/get-gifs.service';
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-search-landing',
  templateUrl: './search-landing.component.html',
  styleUrls: ['./search-landing.component.css']
})
export class SearchLandingComponent implements OnInit {
  searchtext = '';
  gifList: any = [];
  listToShow: any = [];
  animationUrlList : any =[];
  viewSearchReult : boolean = false;
  trendingGifArr :any = [];
  trndingGifUrl : any = [];
  title : any;
  constructor(public gifService: GetGifsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.showTrending();
  }
  search(searchtext) {
    this.viewSearchReult = true;
    this.title = "Your search results!";
    console.log(this.viewSearchReult);
    this.gifService.getGifList(searchtext).then(data => {
      this.gifList = data;
      //console.log(this.gifList.data);
      this.listToShow = this.gifList.data;
      console.log(this.listToShow);
    });
  }
  showTrending(){
    console.log(this.viewSearchReult);
    this.title = "trending items!";
    this.gifService.loadTrendingGifs().then(data => {
      this.trendingGifArr = data;
      console.log(this.trendingGifArr);
      this.trndingGifUrl = this.trendingGifArr.data;
      console.log(this.trndingGifUrl);
    });
  }
}
