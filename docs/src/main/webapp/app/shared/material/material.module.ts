import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: []
})
export class MaterialModule {}
