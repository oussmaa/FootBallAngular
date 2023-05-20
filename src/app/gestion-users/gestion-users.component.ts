import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Utilisateur } from '../Model/Utilisateur';
 import { UsersService } from '../service/users.service';
 

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {
  registerForm!:FormGroup;
  public user :any;
  idUtil:any;
  public users:  Utilisateur[] = [];
  isVisible = false;
  isVisibleupdate= false;
  confirmModal?: NzModalRef;

 
  showConfirm(id:any): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these User?',
      
      nzOnOk: () =>
     
      
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
         this.services.DeleteUser(id).subscribe(
          res=>{ 
            this.GetAllUsers();
        }
        ,err=>{
          alert("Oops errors!");
        }
        );  
        
        }).catch(() => console.log('Oops errors!'))
    });
  }
  submitFormupdate(): void {
    if (this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
    }
    else{

   
      let Username=this.registerForm.controls['Username'].value;
      let Password= this.registerForm.controls['Password'].value;
      let nomUtil= this.registerForm.controls['nomUtil'].value;
      let prenomUtil=this.registerForm.controls['prenomUtil'].value;
      let numTelUtil=this.registerForm.controls['numTelUtil'].value;
      let emailUtil=this.registerForm.controls['emailUtil'].value;
      let roles=this.registerForm.controls['roles'].value;

 

 this.user= {   

    "idUtil":  this.idUtil,
    "image": null,
    "username": Username,
    "password": Password,
    "enabled": true,
    "nomUtil": nomUtil,
    "prenomUtil": prenomUtil,
    "numTelUtil": numTelUtil,
    "emailUtil": emailUtil,
    "roles": [
        {
            
            "role": roles    
          
          }
    ]
 
   
}
    
       this.services.UpdateUser(this.user)
       .subscribe(
         res => {
        
           alert("Update successfully");
           this.GetAllUsers();
           this.isVisibleupdate=false; 
 
         },
          err=>{
           alert(err.error.message)
         }
       );


    }
  
  }
  showModalupdate(user:any): void {
    this.isVisibleupdate = true;
    this.idUtil=user.idUtil;
    this.registerForm.patchValue({
      Username:user.username,
      nomUtil:user.nomUtil,
      prenomUtil:user.prenomUtil,
      numTelUtil:user.numTelUtil,
      emailUtil:user.emailUtil,
      roles:user.roles[0].role 
     })
  }
  handleCancelupdate(): void {
    this.isVisibleupdate = false;
 }
  submitForm(): void {


    if (this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
    }
    else{

   
      let Username=this.registerForm.controls['Username'].value;
      let Password= this.registerForm.controls['Password'].value;
      let nomUtil= this.registerForm.controls['nomUtil'].value;
      let prenomUtil=this.registerForm.controls['prenomUtil'].value;
      let numTelUtil=this.registerForm.controls['numTelUtil'].value;
      let emailUtil=this.registerForm.controls['emailUtil'].value;
      let roles=this.registerForm.controls['roles'].value;

 

 this.user= {   

 
    "image": null,
    "username": Username,
    "password": Password,
    "enabled": true,
    "nomUtil": nomUtil,
    "prenomUtil": prenomUtil,
    "numTelUtil": numTelUtil,
    "emailUtil": emailUtil,
    "roles": [
        {
            
            "role": roles    
          
          }
    ]
 
   
}
    
       this.services.AddUsers(this.user)
       .subscribe(
         res => {
        
           alert("Add successfully");
           this.GetAllUsers();
           this.isVisible=false; 
 
         },
          err=>{
           alert(err.error.message)
         }
       );


    }
  }
  handleCancel()
  {
    this.isVisible=false;
  }
  constructor(public services: UsersService,private formBuilder : FormBuilder ,private modal: NzModalService ) {
 
    this.registerForm = new FormGroup({
      Username: new FormControl(),
      Password: new FormControl(),
      nomUtil: new FormControl(),
      prenomUtil:new FormControl(),
      numTelUtil:new FormControl(),
      emailUtil:new FormControl(),
      roles:new FormControl(),


  });
  this.registerForm = this.formBuilder.group({

    Username: ['', [Validators.required,  ]],
    Password: ['', [Validators.required,  ]],
    nomUtil: ['', [Validators.required, ] ],
    prenomUtil:['', [Validators.required, ] ],
    numTelUtil:['', [Validators.required, ] ],
    emailUtil:['', [Validators.required, ] ],
    roles:['', [Validators.required, ] ],

 });




   }

  ngOnInit(): void {

    this.GetAllUsers();
  }
  GetAllUsers() {
    this.services.getAllUsers().subscribe(res => {
      this.users = res;
     });
  }
  showModal(): void {
    this.isVisible = true;
  }
}
