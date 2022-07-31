import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';


const MATERIAL_UI = [
  MatCommonModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule
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
