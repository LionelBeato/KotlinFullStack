import {Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import { FruitsService} from '../fruits.service';
import { Fruit } from '../fruit/Fruit';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { DragDrop} from '@angular/cdk/drag-drop';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css'],

})
export class FruitListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  fruits: Array<Fruit>;
  dataSource = new MatTableDataSource();


  constructor(private fruitsservice: FruitsService, private router: Router) {
  }


  displayedColumns: string[] = ['id', 'name', 'quality'];



  ngOnInit() {
    this.fruitsservice.getAll().subscribe(data => {
      this.fruits = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    }, error => console.error(error));
  }

  add(name: string, quantity: number): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.fruitsservice.postFruit({name, quantity} as Fruit)
      .subscribe(fruit => {
        this.fruits.push(fruit);
        this.dataSource.data = [...this.fruits];
      });
  }







}



