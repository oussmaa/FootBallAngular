import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-mot-pass-oblier',
  templateUrl: './mot-pass-oblier.component.html',
  styleUrls: ['./mot-pass-oblier.component.css']
})
export class MotPassOblierComponent implements OnInit {
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  loginForm!: FormGroup;
  code:any;
  username:any;
  constructor(private route: ActivatedRoute, public router:Router,private fb: FormBuilder,private service:UsersService) { 
    this.loginForm = new FormGroup({
      email: new FormControl(),
    });

    this.loginForm = this.fb.group({

      email:['', [Validators.required,Validators.pattern(this.emailPattern)] ],


  });
  }
  submitForm():void{
    let email=this.loginForm.controls['email'].value;

      this.service.UpdateUserPasword(email).subscribe(

        data=>{
          alert("Send successfully please check email");
          this.router.navigateByUrl('/login')
    },
        err=>{
          alert("Ops Error try again")
        
           
          this.router.navigateByUrl('/login')
         }
      )
  }

  ngOnInit(): void {
 

  
  }
 
      
 

}

