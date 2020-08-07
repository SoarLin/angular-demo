import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() post: any;
  @Output() openLink = new EventEmitter<any>();
  @Output() updateTitle = new EventEmitter<any>();

  isEdit = false;
  editTitle: string;

  constructor() { }

  ngOnInit(): void {
  }


  editArticleTitle(): void {
    this.isEdit = true;
    this.editTitle = this.post.title;
  }

  exitEditTitle(): void {
    this.isEdit = false;
  }

  saveTitle(): void {
    this.updateTitle.emit({
      id: this.post.id,
      title: this.editTitle
    });
    this.exitEditTitle();
  }

  clickMore(link: string): void {
    this.openLink.emit({
      articleLink: link
    });
  }
}
