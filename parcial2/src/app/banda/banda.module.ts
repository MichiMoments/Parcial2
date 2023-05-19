import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandaListComponent } from './banda-list/banda-list.component'; //cambios
import { BandaDetailComponent } from './banda-detail/banda-detail.component'; //cambios

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BandaListComponent], //cambios
  declarations: [BandaListComponent, BandaDetailComponent] //cambios
})
export class BandaModule { }
