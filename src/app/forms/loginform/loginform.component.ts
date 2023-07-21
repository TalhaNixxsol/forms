import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent implements OnInit {
  loginform!: FormGroup; // Declare 'loginform' as FormGroup

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the 'loginform' FormGroup and define the form controls
    this.loginform = this.fb.group({
      username: ['', Validators.required], // Add Validators if needed (e.g., required)
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+~`-]).{8,}$/)]], // Add Validators if needed (e.g., required)
    });
  }

  onSubmit(data: any) {
    // Check if the form is valid before proceeding
    if (this.loginform.valid) {
      console.log(data); // 'data' already contains the form values due to form binding
      // Proceed with further actions or form submission
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}
