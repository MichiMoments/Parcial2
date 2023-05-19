import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda'; //cambios
import { BandaService } from '../banda.service'; //cambios

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Array<Banda> = []; //cambios

  selectedBanda!: Banda;
  selected = false;

  constructor(private bandaService: BandaService) { }

  getBandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
    });
  }

  onSelected(banda: Banda): void {
    this.selected = true;
    this.selectedBanda = banda;
  }

  ngOnInit() {
    this.getBandas();
  }

}
