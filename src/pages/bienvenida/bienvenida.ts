import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../services/usuario';
import { Final } from '../final/final';

/**
 * Generated class for the Bienvenida page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html',
})
export class Bienvenida {
  public nombre :string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = "Carlos Eduardo Hernandez velador";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bienvenida');
  }

  toFinal(){
    this.navCtrl.push(Final);
  }

}
