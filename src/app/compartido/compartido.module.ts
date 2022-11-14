import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AnimappService } from '../animapp/animapp.service';

@NgModule({
  declarations: [CabeceraComponent],
  imports: [CommonModule],
  exports: [CabeceraComponent],
  providers: [AnimappService],
})
export class CompartidoModule {}
