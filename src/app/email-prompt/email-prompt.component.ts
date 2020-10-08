import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-prompt',
  templateUrl: './email-prompt.component.html',
  styleUrls: ['./email-prompt.component.scss']
})
export class EmailPromptComponent implements OnInit {
  emailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  get email() {
    return this.emailForm.get('email');
  }

  onSubmit() {
    if (!this.email.invalid) {
      this.router.navigate(['/upcoming']);
    }
  }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
    });
  }
}
