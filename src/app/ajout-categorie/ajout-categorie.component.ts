import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Categorie } from '../Model/Categorie';
import { AjoutCategorieService } from '../service/ajout-categorie.service';

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css']
})
export class AjoutCategorieComponent implements OnInit {

  isVisible = false;

 
  registerForm!:FormGroup;
  public stad :any;
  idUtil:any;
  public categorie:  Categorie[] = [];
   isVisibleupdate= false;
  confirmModal?: NzModalRef;
 

 
 
  constructor(public services: AjoutCategorieService,private formBuilder : FormBuilder ,private modal: NzModalService ) {
 
    this.registerForm = new FormGroup({
      label: new FormControl(),
 
 
 


  });
  this.registerForm = this.formBuilder.group({

    label: ['', [Validators.required,  ]],
  
 });

 


   } 
    showModal(): void {
    this.isVisible = true;
  }
 
  ngOnInit(): void {

    this.getAllSatde();
  }
  getAllSatde() {
    this.services.getAllCategorie().subscribe(res => {
      this.categorie = res;
     });
    }
  handleCancel()
  {
    this.isVisible=false;
  }
  showConfirm(id:any): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these categorie?',
      
      nzOnOk: () =>
     
      
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
         this.services.DeleteCategorie(id).subscribe(
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

   
   
      let label=this.registerForm.controls['label'].value;
   
 

 
 
 this.stad= {   

  "idCategorie":this.idUtil,
  "label":label,
  
 
 
   
}       
     

    
       this.services.UpdateCategorie(this.stad)
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
    this.idUtil=user.idCategorie;
    this.registerForm.patchValue({
      label:user.label,
  


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
      let label=this.registerForm.controls['label'].value;
   
 

 
 
 this.stad= {   

 
  "label":label,
  
 
 
   
}    
    
       this.services.AddCategorie(this.stad)
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

