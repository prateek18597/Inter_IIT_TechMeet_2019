import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserTabsPage } from '../user-tabs/user-tabs';

/**
 * Generated class for the UserLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLoginPage {

  //requiring the form elements
  @ViewChild('username') username;
  @ViewChild('password') password;
  public backgroundImage = 'assets/imgs/background-4.jpg';
  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLoginPage');
  }

  // login control goes hare
  login() {
    this.fire.auth.signInWithEmailAndPassword(this.username.value + "@user.com", this.password.value)
      .then(data => {
        this.navCtrl.setRoot(UserTabsPage);
      })
      .catch(error => {
        console.log('got an error .', error);
      }) 
  }

}
