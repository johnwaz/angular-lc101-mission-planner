import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5, count: 0},
       {name: 'Space Camera', mass: 20, count: 0},
       {name: 'Food', mass: 150, count: 0},
       {name: 'Oxygen Tanks', mass: 400, count: 0},
       {name: 'AE-35 Unit', mass: 5, count: 0},
       {name: 'ISS Supplies', mass: 800, count: 0},
       {name: 'Water', mass: 250, count: 0},
       {name: 'Satellite', mass: 1200, count: 0},
       {name: 'R2 Unit', mass: 32, count: 0}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   nearCapacity: false;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(item) {
     if (this.cargoHold.length < this.maxItems && this.cargoMass + item.mass <= this.maximumAllowedMass) {
       this.cargoHold.push(item);
       this.cargoMass += item.mass;
     }
     return this.maximumAllowedMass - 200 < this.cargoMass;
   }

   clickCount(item: object): void {
     item['count']++;
   }

   resetClickCount(): void {
     for (let i = 0; i < this.equipmentItems.length; i++) {
       this.equipmentItems[i]['count'] = 0;
     }
   }

   disableButton(item) {
     return this.cargoHold.length === this.maxItems || this.cargoMass + item.mass > this.maximumAllowedMass  || item.count === 2;
   }

   activeButtons(item) {
     return item.mass + this.cargoMass <= this.maximumAllowedMass && this.cargoHold.length < this.maxItems;
   }

   emptyHold() {
     this.cargoHold = [];
     this.cargoMass = 0;
     this.nearCapacity = false;
   }
   
}
