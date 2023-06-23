import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Curso } from '../../interfaces/curso.interface';
import { Dia } from '../../interfaces/dias.interface';
import { Profesor } from '../../interfaces/profesor.interface';



@Component({
  selector: 'app-agregar-dialog',
  templateUrl: './agregar-dialog.component.html',
  styleUrls: []
})
export class AgregarDialogComponent implements OnInit {

  @Output() refreshData = new EventEmitter<void>();

  submitted !: boolean;
  agregarDialog: boolean = false;

  curso !: Curso
  dias: Dia[] = Object.values(Dia);
  selectedDia: Dia | undefined;
  profesores: Profesor[] = [{ nombre: 'Carlos Loria' },
  { nombre: 'Maikol Guzman' },
  { nombre: 'Olger Achio' },
  { nombre: 'Juan de Dios' }]
  selectedProfesor: Profesor | undefined

  constructor() { }

  ngOnInit(): void {

  }

  cargarDataEmit() {
    this.refreshData.emit();
  }

  abrirDialog() {
    this.agregarDialog = true;
  }

  agregarCursoDialog() {
    this.submitted = false;
    this.agregarDialog = true;
  }

  guardarCurso() {
    this.submitted = true;
    this.agregarDialog = false;
  }

  cerrarDialog() {
    this.agregarDialog = false;
    this.submitted = false;
  }

}
