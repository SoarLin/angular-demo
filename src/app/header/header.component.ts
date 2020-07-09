import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  link: string;
  keyword: string;
  displayTwoWayBinding = true;

  bgClass = 'bg-dark';
  isWhite = true;

  showCategories = true;
  categories = ['World', 'U.S.', 'Technology', 'Design', 'Culture', 'Business', 'Politics', 'Opinion', 'Science', 'Health', 'Style', 'Travel'];
  displayCategory: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'This is title';
    this.link = 'https://www.commscope.com/about-us/';
    this.keyword = 'keyword';
  }

  Subscribe(keyword: string = ''): void {
    let alertMsg = 'You have subscribed.'
    if (keyword !== '') {
      alertMsg += ' keyword = \'' + keyword + '\'';
    }
    console.log(alertMsg);
    // alert(alertMsg);
  }

  checkKeywordLength($event: KeyboardEvent): void {
    console.log($event.key);
    if (this.keyword.length > 6 || this.keyword.length === 0) {
      this.displayTwoWayBinding = false;
    } else {
      this.displayTwoWayBinding = true;
    }
  }

  changeBackground(): void {
    if (this.bgClass === 'bg-dark') {
      this.bgClass = 'bg-1';
    } else if (this.bgClass === 'bg-1') {
      this.bgClass = 'bg-2';
    } else if (this.bgClass === 'bg-2') {
      this.bgClass = 'bg-dark';
    }
    this.isWhite = ((Math.random() * 10) < 5);
  }

  changePost(category: string): void {
    this.displayCategory = category;
  }
}
