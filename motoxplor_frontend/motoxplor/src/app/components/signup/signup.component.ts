import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  user:User;
  constructor(private authService:AuthServiceService,
    private toastr: ToastrService) {
    this.form = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,Validators.required),
      name: new FormControl(null,Validators.required),
      phoneNumber: new FormControl(null,Validators.required),
      address: new FormControl(null,Validators.required),
    });
    this.user={
      email: null,
      password:null,
      name:null,
      phoneNumber:null,
      address: null,
    }
   }

  ngOnInit(): void {
 
  }
  submit(){
    this.user.email=this.form.get('email').value;
    this.user.password=this.form.get('password').value;
    this.user.name=this.form.get('name').value;
    this.user.phoneNumber=this.form.get('phoneNumber').value;
    this.user.address=this.form.get('address').value;
    
    if (this.form.invalid) {
      return;
    }else{
      this.authService.signUp(this.user).subscribe(
        response => {
          console.log("successfully added user to database", response);
          this.toastr.success('register successfully!');

        },
        error => {
          console.log("something went wrong", error);
          this.toastr.error("An error occurred");

         }
      );
    }   
  }
}
