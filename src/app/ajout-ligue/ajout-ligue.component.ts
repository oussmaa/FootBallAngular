import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Ligue } from '../Model/Ligue';
import { Stade } from '../Model/Stade';
import { AjoutLigueService } from '../service/ajout-ligue.service';

@Component({
  selector: 'app-ajout-ligue',
  templateUrl: './ajout-ligue.component.html',
  styleUrls: ['./ajout-ligue.component.css']
})
export class AjoutLigueComponent implements OnInit {

  isVisible = false;

 
  registerForm!:FormGroup;
  public stad :any;
  idUtil:any;
  public ligue:  Ligue[] = [];
   isVisibleupdate= false;
  confirmModal?: NzModalRef;
 

 
 
  constructor(public services: AjoutLigueService,private formBuilder : FormBuilder ,private modal: NzModalService ) {
 
    this.registerForm = new FormGroup({
      saison: new FormControl(),
      nomLigue: new FormControl(),
 
 


  });
  this.registerForm = this.formBuilder.group({

    saison: ['', [Validators.required,  ]],
    nomLigue: ['', [Validators.required,  ]],
 
 });

 


   } 
    showModal(): void {
    this.isVisible = true;
  }
 
  ngOnInit(): void {

    this.getAllSatde();
  }
  getAllSatde() {
    this.services.getAllLigue().subscribe(res => {
      this.ligue = res;
     });
    }
  handleCancel()
  {
    this.isVisible=false;
  }
  showConfirm(id:any): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these Ligue?',
      
      nzOnOk: () =>
     
      
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
         this.services.DeleteLigue(id).subscribe(
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

   
   
      let nomLigue=this.registerForm.controls['nomLigue'].value;
      let saison= this.registerForm.controls['saison'].value;
  
 

 
 
 this.stad= {   

  "idLigue":this.idUtil,
  "nomLigue":nomLigue,
  "saison":saison,
 
 
 
   
}       
     

    
       this.services.UpdateLigue(this.stad)
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
    this.idUtil=user.idLigue;
    this.registerForm.patchValue({
      nomLigue:user.nomLigue,
      saison:user.saison,
 


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
      let nomLigue=this.registerForm.controls['nomLigue'].value;
      let saison= this.registerForm.controls['saison'].value;
  
 

 
 
 this.stad= {   

 
  "nomLigue":nomLigue,
  "saison":saison,
 
 
 
   
}    
    
       this.services.AddLigue(this.stad)
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
