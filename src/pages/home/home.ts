import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public peso: string;
    public altura: string;
    public calculo: string;
    public resultado: number;

    constructor(public navCtrl: NavController) {

    }

    calculaIMC(){
        let p = parseFloat(this.peso);
        let a = parseFloat(this.altura);

        this.resultado = p / (a * a);

        if (this.resultado < 18.5) {
            this.calculo = "Abaixo do peso";
        } else if (this.resultado >= 18.5 && this.resultado < 24.9) {
            this.calculo = "Peso Normal";
        } else if (this.resultado >= 24.9 && this.resultado < 29.9) {
            this.calculo = "Sobrepeso";
        } else if (this.resultado >= 29.9 && this.resultado < 34.9) {
            this.calculo = "Obesidade Grau I";
        } else if (this.resultado >= 34.9 && this.resultado < 39.9) {
            this.calculo = "Obesidade Grau II";
        } else {
            this.calculo = "Obesidade Grau III ou Mórbida";
        }
    }

}
