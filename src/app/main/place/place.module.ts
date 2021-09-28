// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
// Components
import { AddPage } from './pages/add/add.page';
import { DetailPage } from './pages/detail/detail.page';
import { ListPage } from './pages/list/list.page';
// Ionic
import { IonicModule } from '@ionic/angular';

const routes = [
  {
    path: 'list',
    component: ListPage,
  },
  {
    path: 'detail/:placeId',
    component: DetailPage,
  },
  {
    path: 'add',
    component: AddPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  declarations: [ListPage, DetailPage, AddPage]
})
export class PlaceModule {}
