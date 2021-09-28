import { Injectable } from '@angular/core';
// Ionic
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(
    private toastController: ToastController,
  ) { }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      color: 'success',
      message,
      duration: 2000,
      mode: 'ios',
    });

    await toast.present();
  }
}
