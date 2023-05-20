import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Marque } from '../Model/Marque';
import { AjoutMarqueService } from '../service/ajout-marque.service';

@Component({
  selector: 'app-ajout-marque',
  templateUrl: './ajout-marque.component.html',
  styleUrls: ['./ajout-marque.component.css']
})
export class AjoutMarqueComponent implements OnInit {

  isVisible = false;

 
  registerForm!:FormGroup;
  public stad :any;
  idUtil:any;
  public marque:  Marque[] = [];
   isVisibleupdate= false;
  confirmModal?: NzModalRef;
 

 
 
  constructor(public services: AjoutMarqueService,private formBuilder : FormBuilder ,private modal: NzModalService ) {
 
    this.registerForm = new FormGroup({
      nom: new FormControl(),
 
 
 


  });
  this.registerForm = this.formBuilder.group({

    nom: ['', [Validators.required,  ]],
  
 });

 


   } 
    showModal(): void {
    this.isVisible = true;
  }
 
  ngOnInit(): void {

    this.getAllSatde();
  }
  getAllSatde() {
    this.services.getAllMarque().subscribe(res => {
      this.marque = res;
     });
    }
  handleCancel()
  {
    this.isVisible=false;
  }
  showConfirm(id:any): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these marque?',
      
      nzOnOk: () =>
     
      
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
         this.services.DeleteMarque(id).subscribe(
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
   
 

 
 
 this.stad= {   

  "idMarque":this.idUtil,
  "nom":nom,
  
 
 
   
}       
     

    
       this.services.UpdateMarque(this.stad)
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
    this.idUtil=user.idMarque;
    this.registerForm.patchValue({
      nom:user.nom,
  


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
   
 

 
 
 this.stad= {   

 
  "nom":nom,
  
 
 
   
}    
    
       this.services.AddMarque(this.stad)
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

