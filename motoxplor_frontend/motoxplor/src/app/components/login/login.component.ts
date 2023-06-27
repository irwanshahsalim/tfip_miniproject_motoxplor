import { LoginRequest } from './../../models/LoginRequest';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginRequest:LoginRequest
  constructor(private authService:AuthServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) {
      this.form = new FormGroup({
        email: new FormControl(null,[Validators.required,Validators.email]),
        password: new FormControl(null,Validators.required),
      });
      this.loginRequest={
        email: null,
        password:null
      }
     }

  ngOnInit(): void {
  }
  submit(){
    this.loginRequest.email=this.form.get('email').value;
    this.loginRequest.password=this.form.get('password').value;
    if (this.form.invalid) {
      return;
    }else{
      this.authService.login(this.loginRequest).subscribe(
        response => {
          console.log("successfully added user to database", response);
          this.toastr.success('login successfully!');
          this.router.navigate(['/']);
        },
        error => {
          console.log("something went wrong", error);
          this.toastr.error("An error occurred");
         }
      );
    }   
  }
}
