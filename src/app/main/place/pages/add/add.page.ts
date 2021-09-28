// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Services
import { PlaceService } from '../../place.service';
import { ToastService } from '../../../../Utils/toast.service';
// Components
import { ListPage } from '../list/list.page';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  placeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private placeService: PlaceService,
    private router: Router,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.placeForm = this.formBuilder.group({
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  addPlace(): void {
    this.placeService.addPlace(
      this.placeForm.controls.title.value,
      this.placeForm.controls.imageUrl.value,
    );

    this.toastService.showToast('Place added successfully');
    this.router.navigate(['/places/list']);
  }

}
