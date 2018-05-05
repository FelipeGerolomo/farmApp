import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
  rootPage = HomePage;

  constructor(public navCtrl: NavController) {

  }

  home() {
    this.navCtrl.setRoot(this.rootPage);
  }

}
