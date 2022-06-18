import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-active-now-dialog',
  templateUrl: './active-now-dialog.component.html',
  styleUrls: ['./active-now-dialog.component.scss'],
})
export class ActiveNowDialogComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    // tslint:disable-next-line:align
    public dialogRef: MatDialogRef<ActiveNowDialogComponent>) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        panNumber: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
      },
      {}
    );
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() {
    return this.registerForm.controls;
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    this.dialogRef.close();
  }

  // tslint:disable-next-line:typedef
  onNoClick() {
    this.dialogRef.close();
  }

  // tslint:disable-next-line:typedef
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
