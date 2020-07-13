import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() post: any;
  @Output() openLink = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  clickMore(link: string): void {
    this.openLink.emit({
      articleLink: link
    });
  }
}
