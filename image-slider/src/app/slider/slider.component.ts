import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DataService} from '../data.service';
import {Result} from './result';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class SliderComponent implements OnInit {

  sliderArray: object[];
  selectedIndex: number = 0;
  transform: number;

  constructor(private data: DataService) {
    this.sliderArray = [];
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {
    this.data.getData().subscribe((result: Result)=>{
      this.sliderArray = result.sliderArray;
    })
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
   }
   
   downSelected(i) {
     this.transform =  100 - (i) * 50;
     this.selectedIndex = this.selectedIndex + 1;
     if(this.selectedIndex > 4) {
       this.selectedIndex = 0;
     }
   }

}
