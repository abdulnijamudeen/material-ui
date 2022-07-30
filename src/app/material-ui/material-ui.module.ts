import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';

const MATERIAL_UI = [
  MatCommonModule,
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
