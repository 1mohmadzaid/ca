import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/shared/service/api.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactForm!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    public message: NzMessageService,
    private apiService: ApiService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      date: [new Date()],
      message: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  submitContact() {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      this.apiService.addContact(this.contactForm.value);
      this.message.success('Thank You for Contact us');
      this.contactForm.reset();
    } else {
      this.message.error('something was Wrong');
    }
  }
}
