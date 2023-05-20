import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../Model/Formation';
import { ExerciceServiceService } from '../service/exercice-service.service';
import { FormationServiceService } from '../service/formation-service.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  public listExercice:  Formation[] = [];
  isVisible = false;
  addExerciceFormGroup!: FormGroup  ;
  imageUrl : string ='assets/images/exercice/';
  public stad :any;
  imageSrc:any;
  isVisibleupdate= false;
  idUtil:any;
  constructor(private activatedRoute: ActivatedRoute,
   private exerciceService : FormationServiceService,
   private formBuilder: FormBuilder,
   private router: Router) { 
     this.addExerciceFormGroup = new FormGroup({
       nom: new FormControl(),
       image: new FormControl(),
       type: new FormControl(),
       description: new FormControl(),
 
 
   });
   this.addExerciceFormGroup = this.formBuilder.group({
 
     nom: ['', [Validators.required,  ]],
     image: ['', [Validators.required,  ]],
     type: ['', [Validators.required,  ]],
     description: ['', [Validators.required,  ]],
  
 
  });
   }
   handleCancel()
   {
     this.isVisible=false;
   }
 ngOnInit(): void {

   this.listExercices();
 }
 onChange(event:any) {
   
   const file = event.target.files[0];
   const t = this.imageUrl+file.name ;
   console.log(file);
   console.log(t);
   
 }
 showModalupdate(exercice:Formation): void {
   this.isVisibleupdate = true;
   this.idUtil=exercice.idFormation;
   this.addExerciceFormGroup.patchValue({
     nom:exercice.nom,
     image:exercice.image,
     type:exercice.type,
     description:exercice.description



    })
 }
 handleCancelupdate(): void {
   this.isVisibleupdate = false;
}
 listExercices() {
   this.exerciceService.getFormationList().subscribe(
     data=>{ 
       this.listExercice=data;
       console.log(this.listExercice);
     }
   )
 }

 deleteProduct(exercice: Formation) {

   let conf = confirm('Etes-vous sûr de supprimer '+exercice.nom+' ?');
   if (conf)
     this.exerciceService.deleteFormation(exercice.idFormation).subscribe(() => {
       console.log('l exercice a ete supprimer !! ');
       this.SuprimerProduitDuTableau(exercice);
     });
 }

 SuprimerProduitDuTableau(exercice :Formation) {
   this.listExercice.forEach((cur, index) => {
     if(exercice.idFormation=== cur.idFormation) {
       this.listExercice.splice(index, 1);
     }
 });
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
 
 
  
 
   let nom=this.addExerciceFormGroup.controls['nom'].value;
   let image= this.addExerciceFormGroup.controls['image'].value;
   let type= this.addExerciceFormGroup.controls['type'].value;
   let description= this.addExerciceFormGroup.controls['description'].value;




this.stad= {   


 "nom": nom,
 "image": this.imageSrc,
 "type": type,
 "description": description,
  




}
 
    this.exerciceService.createFormation(this.stad)
    .subscribe(
      res => {
     
        alert("Add successfully");
        this.listExercices();
        this.isVisible=false; 

      },
       err=>{
        alert(err.error.message)
      }
    );


}
submitFormupdate(): void {
 
 
  
 
       let nom=this.addExerciceFormGroup.controls['nom'].value;
       let image= this.addExerciceFormGroup.controls['image'].value;
       let type= this.addExerciceFormGroup.controls['type'].value;
       let description= this.addExerciceFormGroup.controls['description'].value;

  
  
 
  this.stad= {   
 
     "idFormation":this.idUtil,
     "nom": nom,
     "image": this.imageSrc,
     "type": type,
     "description": description,
      

  
  
    
 }
     
        this.exerciceService.updateFormation(this.stad)
        .subscribe(
          res => {
         
            alert("Update successfully");
            this.listExercices();
            this.isVisibleupdate=false; 
  
          },
           err=>{
            alert(err.error.message)
          }
        );
 
 
   }
   showModal(): void {
     this.isVisible = true;
   }
}
