import { Component, OnInit, ViewChild } from '@angular/core';
import { CursosRegistradosService } from '../../services/cursos-registrados.service';
import { AgregarDialogComponent } from '../agregar-dialog/agregar-dialog.component';

@Component({
  selector: 'app-tabla-cursos-registrados',
  templateUrl: './tabla-cursos-registrados.component.html',
  styles: [
  ]
})
export class TablaCursosRegistradosComponent implements OnInit {


  @ViewChild(AgregarDialogComponent) agregarDialog !: AgregarDialogComponent;

  constructor(public cursosRegistrados: CursosRegistradosService) { }

  ngOnInit(): void {
  }

  agregarCursoDialog(){
    this.agregarDialog.agregarCursoDialog();
  }

}
