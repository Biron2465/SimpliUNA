import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Curso } from '../../interfaces/curso.interface';
import { Dia } from '../../interfaces/dias.interface';
import { Profesor } from '../../interfaces/profesor.interface';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CursosRegistradosService } from '../../services/cursos-registrados.service';



@Component({
  selector: 'app-agregar-dialog',
  templateUrl: './agregar-dialog.component.html',
  styleUrls: []
})
export class AgregarDialogComponent implements OnInit {

  @Output() refreshData = new EventEmitter<void>();

  agregarCursoFormulario: FormGroup = this.fb.group({
    NRC: [null, [Validators.required]],
    nombre: this.fb.array([],Validators.required),
    codigo: this.fb.array([],Validators.required),
    dias: this.fb.array([],Validators.required),
    hora_entrada: this.fb.array([],Validators.required),
    hora_salida: this.fb.array([],Validators.required),
    profesor: [null, [Validators.required]],
  });

  nuevoNombre: FormControl = this.fb.control('', Validators.required);
  nuevoCodigo: FormControl = this.fb.control('', Validators.required);
  nuevoDia: FormControl = this.fb.control('', Validators.required);
  nuevoHora_Entrada: FormControl = this.fb.control('', Validators.required);
  nuevoHora_Salida: FormControl = this.fb.control('', Validators.required);
  nuevoProfesor: FormControl = this.fb.control('', Validators.required);

  submitted !: boolean;
  agregarDialog: boolean = false;
  horaEntrada!: Date;
  horaSalida!: Date;

  dias: Dia[] = Object.values(Dia);
  diaSeleccionado: Dia | undefined;
  profesores: Profesor[] = [{ nombre: 'Carlos Loria' },
                            { nombre: 'Maikol Guzman' },
                            { nombre: 'Olger Achio' },
                            { nombre: 'Juan de Dios' }]
  selectedProfesor: Profesor | undefined

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosRegistradosService
  ) { }

  ngOnInit(): void {
  }

  abrirDialog() {
    this.agregarDialog = true;
  }

  agregarCursoDialog(){
    this.submitted = false;
    this.agregarDialog = true;
  }

  agregarHorario() {
    if(this.nuevoDia.invalid || this.nuevoHora_Entrada.invalid || this.nuevoHora_Salida.invalid){
      return;
    }

    this.diasArr.push(
      this.fb.control(
        this.nuevoDia.value, Validators.required
      )
    );
    this.horaEntradaArr.push(
      this.fb.control(
        this.horaEntrada, Validators.required
      )
    );
    this.horaSalidaArr.push(
      this.fb.control(
        this.horaSalida, Validators.required
      )
    );

    this.nuevoDia.reset();
    this.nuevoHora_Entrada.reset();
    this.nuevoHora_Salida.reset();
  }

  guardarCurso() {
    if(this.agregarCursoFormulario.invalid){
      return;
    }

    let curso = this.agregarCursoFormulario.value;
    this.cursosService.agregarCurso(curso);

    this.agregarCursoFormulario = this.fb.group({
      NRC: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      codigo: [null, [Validators.required]],
      dias: this.fb.array([],Validators.required),
      hora_entrada: this.fb.array([],Validators.required),
      hora_salida: this.fb.array([],Validators.required),
      profesor: [null, [Validators.required]],
    })

    this.submitted = true;
    this.agregarDialog = false;
  }

  borrarHorario(indice:number){
    this.diasArr.removeAt(indice);
    this.horaEntradaArr.removeAt(indice);
    this.horaSalidaArr.removeAt(indice);
  }


  get diasArr(){
    return this.agregarCursoFormulario.get('dias') as FormArray;
  }
  get horaEntradaArr(){
    return this.agregarCursoFormulario.get('hora_entrada') as FormArray;
  }
  get horaSalidaArr(){
    return this.agregarCursoFormulario.get('hora_salida') as FormArray;
  }

}
