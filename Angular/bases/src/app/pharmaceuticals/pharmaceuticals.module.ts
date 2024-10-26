import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmaceuticalsComponent } from './pharmaceuticals.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PharmaceuticalsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  exports:[
    PharmaceuticalsComponent
  ]
})
export class PharmaceuticalsModule { }
