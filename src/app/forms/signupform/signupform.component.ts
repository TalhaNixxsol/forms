import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit{

  signupform!: FormGroup
  bodydata: any=[]
  constructor(public fb: FormBuilder){}

  ngOnInit(): void {
    // Initialize the 'signupform' FormGroup and define the form controls
    this.signupform = this.fb.group({
      firstname: ['', Validators.required], // Add Validators if needed (e.g., required)
      lastname: ['',Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+~`-]).{8,}$/)]], // Add Validators if needed (e.g., required)
      confirmpassword: ['',[Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+~`-]).{8,}$/)]],
        checkbox: ['',],
    });
  }

  onSubmit(data: any) {
    // Check if the form is valid before proceeding
    if (this.signupform.valid) {
      console.log(data); // 'data' already contains the form values due to form binding
      // Proceed with further actions or form submission
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

}
