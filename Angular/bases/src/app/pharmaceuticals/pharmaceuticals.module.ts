import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmaceuticalsComponent } from './pages/pharmaceuticals/pharmaceuticals.component';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListComponentHtmlComponent } from './components/list/list.component.html/list.component.html.component';
import { AddPhamaceuticalsHtmlComponent } from './components/add-pharmaceuticals/add-phamaceuticals.html/add-phamaceuticals.html.component'

@NgModule({
  declarations: [
    PharmaceuticalsComponent,
    ListComponentHtmlComponent,
    AddPhamaceuticalsHtmlComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [PharmaceuticalsComponent]
})
export class PharmaceuticalsModule { }
