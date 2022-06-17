import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
})
export class CityInfoComponent implements OnInit {
  constructor() {}
  city="City demo";
  description="";
  imagepath="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRCHq5sfoZSceeJhBJOlt2YPx6umIaxsHFPTXSMIgqR86RwMXerY7Z4rPL_cKgtf-KH";
  ngOnInit(): void {}
  /**
   * method1
   */
  public method1() {
    console.log('method1 triggered');
    this.city=" The City";
    this.imagepath=""
  }
 /**
  * method2
  */
 public method2() {
  console.log('method2 triggered');
 }
}
