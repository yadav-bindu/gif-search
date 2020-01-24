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
  animationUrlList: any = [];
  viewSearchReult: boolean = false;
  trendingGifArr: any = [];
  trndingGifUrl: any = [];
  title: any;
  selectionDropdown: any = [] = [
    { id: 1, name: 'gif' },
    { id: 2, name: 'sticker' }
  ];
  selectionValue: any = "Show All";
  stickerList: any = [];
  constructor(public gifService: GetGifsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.showTrending();
  }
  search(selectionValue, searchtext) {
    this.viewSearchReult = true;
    console.log(selectionValue);
    console.log(searchtext.length);
    console.log(this.viewSearchReult);
    if(selectionValue == 'Show All'){
      this.title ="Plese select something from drop down";
    }
      else if (selectionValue == 'gif') {
        this.title ="Gif's are below";
        this.showGif(searchtext);
      }
      else {
        this.title ="Sticker's are below";
        this.showSticker(searchtext)
      }
    

  }
  showGif(searchtext) {
    this.gifService.getGifList(searchtext).then(data => {
      this.gifList = data;
      //console.log(this.gifList.data);
      this.listToShow = this.gifList.data;
      console.log(this.listToShow);
      if(this.listToShow.length  == 0){
        this.title ="No Gif to show. Please try with other text.";
      }
    });
  }
  showSticker(searchtext) {
    this.gifService.getStickersList(searchtext).then(data => {
      this.stickerList = data;
      //console.log(this.gifList.data);
      this.listToShow = this.stickerList.data;
      console.log(this.listToShow);
      if(this.listToShow.length  == 0){
        this.title ="No Sticker to show. Please try with other text.";
      }
    });
  }

  showTrending() {
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
