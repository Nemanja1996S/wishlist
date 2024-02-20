import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator(['google.com', 'yahoo.com', 'gmail.com'])

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactGroup = new FormGroup({
    nameFormControl : new FormControl('', Validators.required),
    emailFormControl : new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    messageFormControl : new FormControl('', [Validators.required, Validators.minLength(10)])
  })
  

  submitForm(){
    console.log(this.contactGroup.valid);
  }
}
