import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  posts$: Observable<ScullyRoute[]> | undefined;

  constructor(private scullyService: ScullyRoutesService) {}

  ngOnInit() {
    this.posts$ = this.scullyService.available$.pipe(
      map(posts => posts.filter(post => post.title))
    );
  }

}
