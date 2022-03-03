import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {


  @Output('onBackClick') onBackClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  goBack(){
    this.onBackClick.emit({})
  }

}
