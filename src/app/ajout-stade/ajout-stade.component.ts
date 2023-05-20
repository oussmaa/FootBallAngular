import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Stade } from '../Model/Stade';
import { StadeService } from '../service/stade.service';
 
@Component({
  selector: 'app-ajout-stade',
  templateUrl: './ajout-stade.component.html',
  styleUrls: ['./ajout-stade.component.css']
})
export class AjoutStadeComponent implements OnInit {
  isVisible = false;

 
  registerForm!:FormGroup;
  public stad :any;
  idUtil:any;
  public satde:  Stade[] = [];
   isVisibleupdate= false;
  confirmModal?: NzModalRef;
 

 
 
  constructor(public services: StadeService,private formBuilder : FormBuilder ,private modal: NzModalService ) {
 
    this.registerForm = new FormGroup({
      nom: new FormControl(),
      adresse: new FormControl(),
      numeroTel: new FormControl(),
      email:new FormControl(),
 


  });
  this.registerForm = this.formBuilder.group({

    nom: ['', [Validators.required,  ]],
    adresse: ['', [Validators.required,  ]],
    numeroTel: ['', [Validators.required, ] ],
    email:['', [Validators.required, ] ],
 

 });

 


   } 
    showModal(): void {
    this.isVisible = true;
  }
 
  ngOnInit(): void {

    this.getAllSatde();
  }
  getAllSatde() {
    this.services.getAllSatde().subscribe(res => {
      this.satde = res;
     });
    }
  handleCancel()
  {
    this.isVisible=false;
  }
  showConfirm(id:any): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these Satde?',
      
      nzOnOk: () =>
     
      
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
         this.services.DeleteSatde(id).subscribe(
          res=>{ 
            this.getAllSatde();
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

   
   
      let nom=this.registerForm.controls['nom'].value;
      let adresse= this.registerForm.controls['adresse'].value;
      let numeroTel= this.registerForm.controls['numeroTel'].value;
      let email=this.registerForm.controls['email'].value;
 

 
 
 this.stad= {   

  "idStade":this.idUtil,
  "nom":nom,
  "adresse":adresse,
  "numeroTel":numeroTel,
  "email":email
 
 
   
}       
     

    
       this.services.UpdateSatde(this.stad)
       .subscribe(
         res => {
        
           alert("Update successfully");
           this.getAllSatde();
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
    this.idUtil=user.idStade;
    this.registerForm.patchValue({
      nom:user.nom,
      adresse:user.adresse,
      numeroTel:user.numeroTel,
      email:user.email,


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

   
      let nom=this.registerForm.controls['nom'].value;
      let adresse= this.registerForm.controls['adresse'].value;
      let numeroTel= this.registerForm.controls['numeroTel'].value;
      let email=this.registerForm.controls['email'].value;
 
 
 

 this.stad= {   

 
    "nom": nom,
    "adresse": adresse,
    "numeroTel": numeroTel,
    "email": email,
  
 
 
   
}
    
       this.services.AddSatde(this.stad)
       .subscribe(
         res => {
        
           alert("Add successfully");
           this.getAllSatde();
           this.isVisible=false; 
 
         },
          err=>{
           alert(err.error.message)
         }
       );


    }
  }
}
