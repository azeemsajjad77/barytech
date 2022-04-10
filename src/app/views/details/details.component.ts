import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  newsImage: any;

  ngOnInit() {
    this.newsImage = this.data.urlToImage;
    console.log(this.data);
  }
}
