import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Stade } from '../Model/Stade';
import { SystemeJeux } from '../Model/SystemeJeux';
import { StadeService } from '../service/stade.service';
import { SystemJeuxService } from '../service/system-jeux.service';

@Component({
  selector: 'app-systemjeux',
  templateUrl: './systemjeux.component.html',
  styleUrls: ['./systemjeux.component.css']
})
export class SystemjeuxComponent implements OnInit {

  isVisible = false;

 
  registerForm!:FormGroup;
  public stad :any;
  idUtil:any;
  public satde:  SystemeJeux[] = [];
   isVisibleupdate= false;
  confirmModal?: NzModalRef;
 

 
 
  constructor(public services: SystemJeuxService,private formBuilder : FormBuilder ,private modal: NzModalService ) {
 
    this.registerForm = new FormGroup({
      nom: new FormControl(),
      Auteur: new FormControl(),
      description: new FormControl(),
      dateCreation:new FormControl(),
 


  });
  this.registerForm = this.formBuilder.group({

    nom: ['', [Validators.required,  ]],
    Auteur: ['', [Validators.required,  ]],
    description: ['', [Validators.required, ] ],
    dateCreation:['', [Validators.required, ] ],
 
   
 
 });

 


   } 
    showModal(): void {
    this.isVisible = true;
  }
 
  ngOnInit(): void {

    this.getAllSatde();
  }
  getAllSatde() {
    this.services.getAllSystemJeux().subscribe(res => {
      this.satde = res;
     });
    }
  handleCancel()
  {
    this.isVisible=false;
  }
  showConfirm(id:any): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these System?',
      
      nzOnOk: () =>
     
      
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
         this.services.DeleteSystemJeux(id).subscribe(
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
      let Auteur= this.registerForm.controls['Auteur'].value;
      let description= this.registerForm.controls['description'].value;
      let dateCreation=this.registerForm.controls['dateCreation'].value;

 
 
 this.stad= {   

  "idSystemeJeux":this.idUtil,
  "nom":nom,
  "auteur":Auteur,
  "description":description,
  "dateCreation":dateCreation
 
 
   
}       
     

    
       this.services.UpdateSystemJeux(this.stad)
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
    this.idUtil=user.idSystemeJeux;
    this.registerForm.patchValue({
      nom:user.nom,
      Auteur:user.Auteur,
      description:user.description,
      dateCreation:user.dateCreation,


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
      let Auteur= this.registerForm.controls['Auteur'].value;
      let description= this.registerForm.controls['description'].value;
      let dateCreation=this.registerForm.controls['dateCreation'].value;
 

 

 this.stad= {   

 
    "nom": nom,
    "auteur": Auteur,
    "description": description,
    "dateCreation": dateCreation,
  
 
 
   
}
    
       this.services.AddSystemJeux(this.stad)
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
