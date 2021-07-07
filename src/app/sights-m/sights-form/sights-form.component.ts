import {Component, OnInit} from '@angular/core';
import {SightseeingPoint} from '../../models/sightseeing-point';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SightsService} from '../../services/sights.service';
import {SightsListComponent} from '../../sights-list/sights-list.component';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-sights-form',
  templateUrl: './sights-form.component.html',
  styleUrls: ['./sights-form.component.scss']
})
export class SightsFormComponent implements OnInit {
  id = '';
  sight!: SightseeingPoint;
  submitted = false;
  message = '';
  form: FormGroup;
  DDLatRegex = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
  DDLngRegex = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
  colors: [number, string][] = [...SightseeingPoint.colors()];

  constructor(private sightsService: SightsService, private sightComponent: SightsListComponent, private aRoute: ActivatedRoute) {
    this.form = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        longitude: new FormControl('', [Validators.required, Validators.pattern(this.DDLngRegex)]),
        latitude: new FormControl('', [Validators.required, Validators.pattern(this.DDLatRegex)]),
        country: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required, Validators.maxLength(256)]),
        color: new FormControl('', [Validators.required])
      });

    this.aRoute.params.subscribe(params => this.id = params.id);
  }


  errorMessage(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName]?.touched && this.form.controls[controlName]?.errors?.[errorName];
  }

  ngOnInit(): void {
    if (this.id) {
      this.sightsService.getSight(this.id).subscribe((data: SightseeingPoint) => {
        this.form.patchValue(data);
      });
    }
    return this.form.value;
  }

  upDate(): void {
    if (this.sight) {
      this.sightsService.updateSight(this.form.value, this.sight.id).subscribe(() => {
        this.submitted = true;
        this.message = 'You edit sight';
      });
      return;
    }
    console.log('dodawanie');
    const newValue = this.form.value;
    newValue.id = '_' + Math.random().toString(36).substr(2, 9);
    this.sightsService.addNewSight(newValue).subscribe(() => {
      this.submitted = true;
      this.message = 'You add new sight!';
    });
  }
}
