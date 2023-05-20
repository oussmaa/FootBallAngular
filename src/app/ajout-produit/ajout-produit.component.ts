import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { monthsInYear } from 'date-fns';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Produit } from '../Model/Produit';
import { AjoutProduitService } from '../service/ajout-produit.service';
import { Categorie } from '../Model/Categorie';
import { Marque } from '../Model/Marque';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  isVisible = false;
  public marque:  Marque[] = [];
  public categorie:  Categorie[] = [];

  imageSrc:any;
  registerForm!:FormGroup;
  public prod :any;
  idUtil:any;
  public produit:  Produit[] = [];
   isVisibleupdate= false;
  confirmModal?: NzModalRef;
 
  onFilechange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result)
      this.imageSrc = reader.result;
    };
  }
 
 
  constructor(public services: AjoutProduitService,private formBuilder : FormBuilder ,private modal: NzModalService ) {
 
    this.registerForm = new FormGroup({
      nomProduit: new FormControl(),
      prix : new FormControl(),
      description: new FormControl(),
      couleur: new FormControl(),
      taille: new FormControl(),
      genre: new FormControl(),
      image: new FormControl(),
      Moy: new FormControl(),
      categorie: new FormControl(),
      marque: new FormControl(),

  });
  this.registerForm = this.formBuilder.group({

    nomProduit: ['', [Validators.required,  ]],
    prix: ['', [Validators.required,  ]],
    description: ['', [Validators.required,  ]],
    couleur: ['', [Validators.required,  ]],
    taille: ['', [Validators.required,  ]],
    genre: ['', [Validators.required,  ]],
    image: ['', [Validators.required,  ]],
    Moy: ['', [Validators.required,  ]],
    categorie: ['', [Validators.required,  ]],
    marque: ['', [Validators.required,  ]],
 
  
 });

 


   } 
    showModal(): void {
    this.isVisible = true;
  }
 
  ngOnInit(): void {

    this.getAllProduit();
    this.getAllCategorie();
    this.getAllMarque();

  }
  getAllMarque() {
    this.services.getAllMarque().subscribe(res => {
      this.marque = res;
     });
    }
  getAllCategorie() {
    this.services.getAllCategorie().subscribe(res => {
      this.categorie = res;
     });
    }
  getAllProduit() {
    this.services.getAllProduit().subscribe(res => {
      this.produit = res;
     });
    }
  handleCancel()
  {
    this.isVisible=false;
  }
  showConfirm(id:any): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these Produit?',
      
      nzOnOk: () =>
     
      
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
         this.services.DeleteProduit(id).subscribe(
          res=>{ 
            this.getAllProduit();
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

   
   
      let nomProduit=this.registerForm.controls['nomProduit'].value;
      let prix=this.registerForm.controls['prix'].value;
      let description=this.registerForm.controls['description'].value;
      let couleur=this.registerForm.controls['couleur'].value;
      let taille=this.registerForm.controls['taille'].value;
      let genre=this.registerForm.controls['genre'].value;
       let Moy=this.registerForm.controls['Moy'].value;
      let categorie=this.registerForm.controls['categorie'].value;
      let marque=this.registerForm.controls['marque'].value;

 

 
 
 this.prod= {   

  "idProduit":this.idUtil,
  "nomProduit":nomProduit,
    "prix"  :prix,
    "description":description,
    "couleur":couleur,
    "taille":taille,
    "genre":genre,
    "image":this.imageSrc,
    "moy":Moy,
    "categorie":{"idCategorie":categorie},
    "marque":{"idMarque":marque},
   
}       
     

    
       this.services.UpdatProduit(this.prod)
       .subscribe(
         res => {
        
           alert("Update successfully");
           this.getAllProduit();
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
    this.idUtil=user.idProduit;
    this.registerForm.patchValue({
      nomProduit: user.nomProduit,
      prix: user.prix,
      description: user.description,
      couleur: user.couleur,
      taille: user.taille,
      genre: user.genre,
      image: user.image,
      Moy: user.Moy,
      categorie: user.categorie,
      marque: user.marque
      
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
   
      let nomProduit=this.registerForm.controls['nomProduit'].value;
      let prix=this.registerForm.controls['prix'].value;
      let description=this.registerForm.controls['description'].value;
      let couleur=this.registerForm.controls['couleur'].value;
      let taille=this.registerForm.controls['taille'].value;
      let genre=this.registerForm.controls['genre'].value;
      let Moy=this.registerForm.controls['Moy'].value;
      let categorie=this.registerForm.controls['categorie'].value;
      let marque=this.registerForm.controls['marque'].value;

 

 
 
 this.prod= {   

  "idProduit":this.idUtil,
  "nomProduit":nomProduit,
    "prix"  :prix,
    "description":description,
    "couleur":couleur,
    "taille":taille,
    "genre":genre,
    "image":this.imageSrc,
    "moy":Moy,
    "categorie":{"idCategorie":categorie},
    "marque":{"idMarque":marque},
   
}     
    
       this.services.AddProduit(this.prod)
       .subscribe(
         res => {
        
           alert("Add successfully");
           this.getAllProduit();
           this.isVisible=false; 
 
         },
          err=>{
           alert(err.error.message)
         }
       );


    }
  }
}

