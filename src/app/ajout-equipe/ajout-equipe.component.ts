import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Equipe } from '../Model/Equipe';
import { AjoutEquipeService } from '../service/ajout-equipe.service';

@Component({
  selector: 'app-ajout-equipe',
  templateUrl: './ajout-equipe.component.html',
  styleUrls: ['./ajout-equipe.component.css']
})
export class AjoutEquipeComponent implements OnInit {

  isVisible = false;

 
  registerForm!:FormGroup;
  public stad :any;
  idUtil:any;
  public equipe:  Equipe[] = [];
   isVisibleupdate= false;
  confirmModal?: NzModalRef;
 
  imageSrc:any;
 
 
  constructor(public services: AjoutEquipeService,private formBuilder : FormBuilder ,private modal: NzModalService ) {
 
    this.registerForm = new FormGroup({
      nom: new FormControl(),
      logo: new FormControl(),
   
 


  });
  this.registerForm = this.formBuilder.group({

    nom: ['', [Validators.required,  ]],
    logo: ['', [Validators.required,  ]],
 
 

 });

 


   } 
    showModal(): void {
    this.isVisible = true;
  }
 
  ngOnInit(): void {

    this.getAllSatde();
  }
  getAllSatde() {
    this.services.getEquipe().subscribe(res => {
      this.equipe = res;
     });
    }
  handleCancel()
  {
    this.isVisible=false;
  }
  showConfirm(id:any): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these Equipe?',
      
      nzOnOk: () =>
     
      
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
         this.services.DeleteEquipe(id).subscribe(
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
      let logo= this.registerForm.controls['logo'].value;
 
 

 
 
 this.stad= {   

  "idEquipe":this.idUtil,
  "nom":nom,
  "logo":this.imageSrc,
 
 
 
   
}       
     

    
       this.services.UpdateEquipe(this.stad)
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
    this.idUtil=user.idEquipe;
    this.registerForm.patchValue({
      nom:user.nom,
      logo:user.logo,
 


     })
  }
  handleCancelupdate(): void {
    this.isVisibleupdate = false;
 }
 
onFilechange(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    console.log(reader.result)
    this.imageSrc = reader.result;
  };
}
  submitForm(): void {


    if (this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
    }
    else{

      let nom=this.registerForm.controls['nom'].value;
      let logo= this.registerForm.controls['logo'].value;
 
 
 

 this.stad= {   

 
    "nom": nom,
    "logo": this.imageSrc,
 
  
 
 
   
}
    alert(this.imageSrc)
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
