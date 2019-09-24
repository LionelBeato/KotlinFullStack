import { Component, OnInit } from '@angular/core';
import {FruitsService} from '../fruits.service';
import { ActivatedRoute } from '@angular/router';
import { Fruit} from './Fruit';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})



export class FruitComponent implements OnInit {


  fruit: Fruit;


  constructor(private fruitsservice: FruitsService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fruitsservice.getFruit(params.get('id')).subscribe(data => {
        this.fruit = data;
        console.log(this.fruit);
      }, error => console.error(error));
    });

  }
}
