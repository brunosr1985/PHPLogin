import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
    selector: 'page-bemvindo',
    templateUrl: 'bemvindo.html',
})
export class Bemvindo {
    constructor(public navCtrl: NavController) {
    }

    login(){
        this.navCtrl.push(Login);
    }

    signup(){
        this.navCtrl.push(SignupPage);
    }
}