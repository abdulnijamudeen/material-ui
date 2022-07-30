import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_UI = [
  MatButtonModule
]

@NgModule({
  imports: [
    ...MATERIAL_UI
  ],
  exports: [
    ...MATERIAL_UI
  ]
})
export class MaterialUiModule { }
