import { Component, OnInit } from '@angular/core';
import {FruitsService} from '../fruits.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Fruit} from './Fruit';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})



export class FruitComponent implements OnInit {


  fruit: Fruit;
  arr: number[];
  location: any;


  constructor(private fruitsservice: FruitsService, private route: ActivatedRoute, private router: Router,

) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fruitsservice.getFruit(params.get('id')).subscribe(data => {
        this.fruit = data;
        console.log(this.fruit);
        this.arr = new Array<number>(this.fruit.quantity);

      }, error => console.error(error));
    });

  }

  save(): void {
    this.route.paramMap.subscribe(params => {
      this.fruitsservice
        .putFruit(this.fruit, params.get('id'))
        .subscribe(() => this.goBack());
    });
  }

  goBack(): void {
    this.location.back();
  }

  delete(id) {
    this.fruitsservice.deleteFruit(id)
      .subscribe((data) => {
        console.log(this.fruit);
        this.router.navigate(['/fruit-list']);
      });
  }
}


