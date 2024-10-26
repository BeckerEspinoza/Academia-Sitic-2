import { Component, OnInit } from '@angular/core';
import { EPharmaType } from '../../interfaces/enums.interface';
import { Drug } from '../../interfaces/drug.interface';

@Component({
  selector: 'add-pharmaceuticals',
  templateUrl: './add-pharmaceuticals.component.html',
  styleUrls: ['./add-pharmaceuticals.component.css']
})
export class AddPharmaceuticalsComponent implements OnInit {

  drug: Drug = {
    name: '',
    price: 0,
    type: EPharmaType.Analgesico
  };

  pharmaTypes = Object.keys(EPharmaType)
    .filter(key => isNaN(Number(key)))
    .map((key, index) => ({
      name: key,
      value: index
    }));

  constructor() { }

  ngOnInit(): void {
  }

  emitDrug() {
    console.log(this.drug);
  }

}
