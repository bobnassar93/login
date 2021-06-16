import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  modal = null;
  iconName = 'moon';
  constructor(private globalService: GlobalService, public modalController: ModalController, private routerOutlet: IonRouterOutlet) {

  }

  async presentModal() {
    this.modal = await this.modalController.create({
      component: ModalPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await this.modal.present();
  }

  ngOnInit() {
    this.globalService.initTheme();
  }

  toggleMode(ev) {
    this.globalService.toggleMode(ev);
  }
}
