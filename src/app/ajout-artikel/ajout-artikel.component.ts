import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Actualite } from '../Model/Actualite';
import { ActualiteService } from '../service/actualite.service';
interface ItemData {
  id: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-ajout-artikel',
  templateUrl: './ajout-artikel.component.html',
  styleUrls: ['./ajout-artikel.component.css']
})
export class AjoutArtikelComponent implements OnInit {
  actu:any;
  editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};
  listOfData: ItemData[] = [];
  isVisible=false;
  registerForm!:FormGroup;
  imageSrc:any;
  public stad :any;
  idUtil:any;
  public equipe:  Actualite[] = [];
   isVisibleupdate= false;
  confirmModal?: NzModalRef;
  file: File | null = null;
  showModal(): void {
    this.isVisible = true;
  }
  submitForm():void
{

  if (this.registerForm.invalid){
    this.registerForm.markAllAsTouched();
  }
  else{

 
    let titre=this.registerForm.controls['titre'].value;
    let contenu= this.registerForm.controls['contenu'].value;
    let image= this.registerForm.controls['image'].value;
 


this.actu= {   
 "titre":titre,
 "contenu":contenu,
 "image":this.imageSrc,
 
 
}
  
     this.services.AddActualite(this.actu)
     .subscribe(
       res => {
      
         alert("Add successfully");
         //this.GetAllMatch();
         this.isVisible=false; 

       },
        err=>{
         alert(err.error.message)
       }
     );


  }




}
GetAllActualite() {
  this.services.getAllActualite().subscribe(res => {
    console.log(res)
    this.equipe = res;
  
   });
}
showConfirm(id:any): void {
  this.confirmModal = this.modal.confirm({
    nzTitle: 'Do you Want to delete these Acutlité?',
    
    nzOnOk: () =>
   
    
      new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
       this.services.DeleteActualite(id).subscribe(
        res=>{ 
          this.GetAllActualite();
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

 
 
 
    let titre=this.registerForm.controls['titre'].value;
    let contenu= this.registerForm.controls['contenu'].value;
    let image= this.registerForm.controls['image'].value;





    this.actu= {  
      
      "titre":titre,
      "contenu":contenu,
      "image":this.imageSrc,
      
      
     }    
   

  
     this.services.UpdateActualit(this.actu,this.idUtil)
     .subscribe(
       res => {
      
         alert("Update successfully");
         this.GetAllActualite();
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
  this.idUtil=user.idActualite;
  this.registerForm.patchValue({
    titre:  user.titre,
    contenu:  user.contenu ,
    image: user.image,



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
handleCancel(){
  this.isVisible=false;
}
 
 
constructor(public services:ActualiteService, private formBuilder : FormBuilder ,private modal: NzModalService ) {
 
  this.registerForm = new FormGroup({
    titre: new FormControl(),
    contenu: new FormControl(),
    image: new FormControl(),
 


});

 
this.registerForm = this.formBuilder.group({

  titre: ['', [Validators.required,  ]],
  contenu: ['', [Validators.required,  ]],
  image: ['', [Validators.required, ] ],
 

});




 }


  ngOnInit(): void {
    this.GetAllActualite()
  }

}
