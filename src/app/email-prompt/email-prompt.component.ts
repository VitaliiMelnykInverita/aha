import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-prompt',
  templateUrl: './email-prompt.component.html',
  styleUrls: ['./email-prompt.component.scss']
})
export class EmailPromptComponent implements OnInit {
  emailForm: FormGroup;
  constructor(
    public fb: FormBuilder,
  ) {
  }

  onSubmit() {
    console.log('submit yee')
  }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', Validators.required],
    });
  }
}
