import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // 2020-06-06 11:23:45
  created = new Date(2020, 5, 6, 11, 23, 45);
  increase1 = 0.025734546756;
  increase2 = 0.039412643123;

  posts = [
    {
      id: 1,
      created: new Date(2020, 5, 18, 18, 20, 12),
      title: '台灣人均月薪5萬？「薪情平台」揭秘：輸入薪水，就知道多少人收入比你高',
      content: '「2017年台灣人平均月薪已達4萬9989元創歷史新高！」這是去年勞動節前夕時任行政院長賴清德說的一句話。到了2019年，你總月薪超過了四萬九了嗎？你知不知道自己薪水落在全國哪一個水平呢？台灣哪一個行業薪水是最高的呢？',
      author: '梁駿樂',
      link: 'https://futurecity.cw.com.tw/article/638'
    },
    {
      id: 2,
      created: new Date(2020, 6, 8, 14, 24, 2),
      title: '讓駭客決定數位身份證的發行日吧！',
      content: '內政部原定10月份上路的「數位身份證」（eID），因遭到國內上百位資安專家、達人之質疑，或許會延後。\n\n但是，從政府對各界質疑的反應模式來看，還是在沿用老舊的官場思維行事，倘若相關部門和執行人士不能跳脫框框，功能包山包海的「數位身份證」，輕則曠日費時、補補貼貼、尾大不掉，重則帶來國際未曾見過的資安災難。',
      author: '范疇',
      link: 'https://futurecity.cw.com.tw/article/1526'
    }
  ];

  innerHTML = [
    '{{ Date | date: "medium" }}',
    '{{ Date | date: "yyyy-MM-dd HH:mm:ss" }}',
    '{{ String | uppercase }}',
    '{{ String | lowercase }}',
    '{{ Number | currency }}',
    `{{ Number | currency:'USD':'code' }}`,
    `{{ Number | currency:'TWD':'symbol':'1.0-0' }}`,
    `{{ Number | currency:'TWD':'code':'4.1-3' }}`,
    `{{ Number | number:'3.3-4' }}`,
    `{{ Number | percent:'1.0-3' }}`,
    `{{ Number | percent:'2.2-4' }}`,
    `{{ item?.name }}`
  ];
  item = null;

  constructor() { }

  ngOnInit(): void {
  }

  changePostsTitle(params: any): void {
    this.posts = this.posts.map((post) => {
      if (post.id === params.id) {
        post.title = params.title;
      }
      return post;
    });
  }

  openArticle(params: any): void {
    window.open(params.articleLink);
  }

}
