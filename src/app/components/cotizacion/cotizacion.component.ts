import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {

  producto: string;

  constructor() { }

  ngOnInit(): void {
  }

  obtenerSeleccionado( producto: string ){
    console.log(producto);
    this.producto = producto;
  }

  validarFormulario(){
    console.log('Prueba');
    var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }

  agregar(){
    console.log('Prueba');
  }

}
