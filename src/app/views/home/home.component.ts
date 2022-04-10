import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DetailsComponent } from '../details/details.component';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  newsList: any;

  ngOnInit() {
    this.http
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=' +
          environment.api_key
      )
      .subscribe(
        (res: any) => {
          this.newsList = res.articles;
        },
        (err) => console.log(err)
      );
  }

  getDetails(item: any) {
    this.dialog.open(DetailsComponent, {
      width: '600px',
      data: item,
    });
  }
}
