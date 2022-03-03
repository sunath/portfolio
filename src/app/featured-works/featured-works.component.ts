import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-featured-works',
  templateUrl: './featured-works.component.html',
  styleUrls: ['./featured-works.component.css']
})
export class FeaturedWorksComponent implements OnInit {


  @Input('isWorksPage') isWorksPage:boolean = true;

  onBackClick(d:any){
    this.showFeaturedWork = false;
  }


  showFeaturedWork:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  ngClasses={
    'hide-mobile':!this.isWorksPage
  }


  toggle(){
    this.showFeaturedWork = !this.showFeaturedWork;
  }

}
