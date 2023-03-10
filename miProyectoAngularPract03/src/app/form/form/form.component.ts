import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {



  nombreBebida: FormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.minLength(50)]);
  tipoAlcohol: FormControl = new FormControl('', Validators.required);
  gradosDeAlcohol: FormControl = new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(100)]);
  tipoMezcla: FormControl = new FormControl('', Validators.required);
  fechaCreacion: FormControl = new FormControl('', Validators.required);
  campoEmail: FormControl = new FormControl('', Validators.email);
  mayorEdad: FormControl = new FormControl('', Validators.required);

  MyNewForm: FormGroup = new FormGroup({nombreBebida: this.nombreBebida,
                                        tipoAlcohol: this.tipoAlcohol,
                                        gradosDeAlcohol: this.gradosDeAlcohol,
                                        tipoMezcla: this.tipoMezcla,
                                        fechaCreacion: this.fechaCreacion,
                                        campoEmail: this.campoEmail,
                                        mayorEdad: this.mayorEdad});
  constructor(){}
  ngOnInit(){}
  Clic(datos:FormGroup){console.log(datos);}
}
