import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  private _total:number = 0;
  @Input('total')
  set total(total:number){
    this._total = total;
    
    //Hardcoded to only work with 6 elements
    if (total !=0) {
      this.percent = Math.round(this._total/6*100); //Change this line to make it more dynamic
    }
    else{
      this.percent = 0;
    }
  }
  
  percent:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
