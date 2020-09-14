import {Component, Input, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup} from '@angular/forms';
import {InputcontainerComponent} from '../inputcontainer/inputcontainer.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-submitbutton',
  templateUrl: './submitbutton.component.html',
  styleUrls: ['./submitbutton.component.css']
})
export class SubmitbuttonComponent implements OnInit {

  @Input() inputsFormGroup: InputcontainerComponent;
  constructor() { }

  ngOnInit(): void {


  }

  onClick(): void {
    if (this.inputsFormGroup == null){
      console.log('OH NO');
    }
    const ass = this.inputsFormGroup.selectedMember;
    const selected: FormControl = this.inputsFormGroup.radioButtons;
    const firstName: FormControl = this.inputsFormGroup.firstName;
    const lastName: FormControl = this.inputsFormGroup.lastName;
    const email: FormControl = this.inputsFormGroup.email;
    const postalCode: FormControl = this.inputsFormGroup.postalCode;
    let invalid = false;
    console.log('SELECTED: ' , ass);
    if (firstName.invalid){
      this.inputsFormGroup.firstName.markAsTouched();
      invalid = true;
    }
    if (lastName.invalid){
      this.inputsFormGroup.lastName.markAsTouched();
      invalid = true;
    }
    if (email.invalid){
      this.inputsFormGroup.email.markAsTouched();
      invalid = true;
    }
    if (postalCode.invalid){
      this.inputsFormGroup.postalCode.markAsTouched();
      invalid = true;
    }
    if (!ass){
      invalid = true;
    }
    if (invalid){
      return;
    }
    console.log('SUCCESS', this.inputsFormGroup.mpData.get(ass));





  }



}
