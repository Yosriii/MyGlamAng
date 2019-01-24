import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../card-data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public cardData = [] ;

  constructor(private _cardDataService: CardDataService) { }

  ngOnInit() {
    this._cardDataService.getCardData().subscribe(file => {
      this.cardData = file.data
    }) ;
  } 

}


