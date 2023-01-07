import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/shared/service/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public validateForm: UntypedFormGroup;
  constructor(
    private route: Router,
    private readonly apiService: ApiService,
    private fb: UntypedFormBuilder,
    public message: NzMessageService
  ) {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  public onSubmit(): void {
    this.apiService
      .login(this.validateForm.value.email, this.validateForm.value.password)
      .then(
        (res) => {
          if (res) {
            this.message.success('login Successfully');
            this.route.navigate(['/admin']);
          } else {
            this.message.info('Wrong Email-Id or Password');
            this.route.navigate(['']);
          }
        },
        (err) => {
          this.message.error('something was Wrong');
          console.log(err);
        }
      );
  }
}
