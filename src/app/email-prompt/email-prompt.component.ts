import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  onSubmit() {
    this.router.navigate(['/upcoming']);
  }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', Validators.required],
    });
  }
}
