import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-valid-email',
  templateUrl: './valid-email.component.html',
  styleUrls: ['./valid-email.component.css']
})
export class ValidEmailComponent implements OnInit {
  loginForm!: FormGroup;
  code:any;
  username:any;
  constructor(private route: ActivatedRoute, public router:Router,private fb: FormBuilder,private service:UsersService) { 

    this.loginForm = new FormGroup({
      Code: new FormControl(),
    });

    this.loginForm = this.fb.group({

      Code:['', [Validators.required, ] ],


  });
  }

  ngOnInit(): void {
    this.username= this.route.snapshot.params['id'];
   
  }
  submitForm():void{
    let codes=this.loginForm.controls['Code'].value;

    this.code = JSON.parse(localStorage.getItem('register') || '{}'); 
     if(codes==this.code)
     {
      this.service.UpdateUserEamil(this.username).subscribe(

        data=>{
          localStorage.removeItem('register');
          localStorage.clear();
          alert("Update successfully")
          this.router.navigateByUrl('/login')
   },
        err=>{
          alert("Ops Error try again")
          localStorage.removeItem('user');
          localStorage.clear();
          
          this.router.navigateByUrl('/login')
         }
      )
  
  }
  else{
    alert("Code n'est pas valide")
  }
     }

  }
 
