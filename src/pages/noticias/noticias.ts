import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppsPage } from '../apps/apps';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {
  appsPage = AppsPage;

  news: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    this.news = "clima";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

  addNews() {
    this.navCtrl.push(this.appsPage);
  }

}
