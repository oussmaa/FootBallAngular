import { Component, OnInit } from '@angular/core';
 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../service/users.service';
@Component({
  selector: 'app-valid-password',
  templateUrl: './valid-password.component.html',
  styleUrls: ['./valid-password.component.css']
})
export class ValidPasswordComponent implements OnInit {

  loginForm!: FormGroup;
  code:any;
  username:any;
  constructor(private route: ActivatedRoute, public router:Router,private fb: FormBuilder,private service:UsersService) { 

    this.loginForm = new FormGroup({
      password:new FormControl(),
    });

    this.loginForm = this.fb.group({

      password:['', [Validators.required, ] ],


  });
  }

  ngOnInit(): void {
    this.username= this.route.snapshot.params['id'];
   
  }
  submitForm():void{
    let password=this.loginForm.controls['password'].value;

    
      this.service.updatePassword(password,this.username).subscribe(

        data=>{
 alert("Password Updated successfully")
          
          this.router.navigateByUrl('/login')
   },
        err=>{
          alert("Ops Error try again")
          this.router.navigateByUrl('/login')
         }
      )
  
  }
  
    

  }
 
