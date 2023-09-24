import { Component } from '@angular/core';
import { API_Key } from 'src/config/config';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsJson = [];
  url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=manufacturing&apikey=${API_Key}`;

  constructor() {
    this.loadNews();
  }

  async loadNews() {
    let response = await fetch(this.url);
    let responseAsJson = await response.json();
    this.newsJson = responseAsJson['feed'];
    console.log(this.newsJson);
  }
}
