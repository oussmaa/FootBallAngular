import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  usernamePattern="[a-zA-z1-9_]{5,}";
   data:any;
  user:any;
  users:any;

  testlogin=false;

  submitForm(): void {

   if (this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }else{
      let username=this.loginForm.controls['username'].value;
      let password=this.loginForm.controls['password'].value;

      this.user={
        "username":username,
        "password":password
        }
         this.servicre.login(this.user)
         .subscribe(
           res => {
            
            this.servicre.GetUserUserByusername(username).subscribe(rese => {
             if(rese.enabled==true)
             {
              localStorage.setItem('user',JSON.stringify(rese));

              this.router.navigate(['/actulatite'])
             }
             else{
              alert("Please Verify your Email")
             }
         

             });
            
           },
            ()=>{
              alert("Please Verif Your Password Or Username ")

           }
         );
    }

   }
   
   constructor(private fb: FormBuilder, private servicre:UsersService,private router:Router) {


 
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
  });

  this.loginForm = this.fb.group({
    username: ['', [Validators.required,Validators.pattern(this.usernamePattern) ]],
    password: ['', [Validators.required]],


  })


   }

  ngOnInit(): void {

 
 
  }

 

}
