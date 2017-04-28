import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the Final page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
})
export class Final {
  public nombre: string = "";
  public name:string;
  public l1name:string;
  public l2name:string;
  public fecha:string;
  public RFC:string = "XXXX000000";
  public valF = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = "Carlos Eduardo Hernandez velador";
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Final');
  }

  generar(){
    this.valF=false;
    if(/^\d{4}\/\d{2}\/\d{2}$/.test(this.fecha)){
      var fechaS = this.fecha.split("/");
      this.RFC = this.p1(this.l1name) + this.name.split("")[0] + this.l2name.split("")[0];
      this.RFC += fechaS[0].substr(2,3) + fechaS[1]+ fechaS[2];
    }else{
      this.valF=true;
    } 
  }

  p1(apellido:string):string{
    let temp = apellido.split("");
    let voc="";
    for(let i =1 ; i < temp.length; i++){
      if(temp[i].toLocaleLowerCase()=='a' || temp[i].toLocaleLowerCase()=='e' || temp[i].toLocaleLowerCase()=='i' ||temp[i].toLocaleLowerCase()=='o' || temp[i].toLocaleLowerCase()=='u'){
        voc = temp[i];
        break;
      }
    }
    return temp[0]+""+voc.toUpperCase();
  }
}
