import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { UsuarioService } from '../../services/usuario';
import { Bienvenida } from '../bienvenida/bienvenida';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  formulario : FormGroup;
  public dato: any;
  public log:boolean = true;
  

  constructor(public navCtrl: NavController, public fb: FormBuilder /*, public user: UsuarioService*/) {
   this.formulario = this.fb.group({
     'username': ['',[Validators.minLength(6),Validators.required,Validators.pattern(/^([a-z])+$/)]],
     'pass':['',[Validators.required, Validators.minLength(8),Validators.pattern(/^([a-z][|@#%&]0-9])+$/) ]]
   });
  }

  doLogin(){
   console.log(this.formulario.value);
   this.dato = this.formulario.value;
   if(this.dato.username === 'caedhernandezve' && this.dato.pass === '12400272@ittepic'){
      /* this.user.username= "Carlos Eduardo Hernandez velador";*/
       this.navCtrl.push(Bienvenida);
   }else{
      this.log=false;
   }
  }

}
