import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-listado',
  templateUrl: './form-listado.component.html',
  styleUrls: ['./form-listado.component.css']
})
export class FormListadoComponent {
  @Input() input_datos = new Array;
}
