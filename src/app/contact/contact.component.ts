import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactGroup = new FormGroup({
    nameFormControl : new FormControl(''),
    emailFormControl : new FormControl(''),
    messageFormControl : new FormControl('')
  })
  

  submitForm(){
    console.log(this.contactGroup.value);
  }
}
