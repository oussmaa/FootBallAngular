import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { User } from '../configuration/user/user';
import { Equipe } from '../Model/Equipe';
import { Ligue } from '../Model/Ligue';
import { Match } from '../Model/Match';
import { Stade } from '../Model/Stade';
import { Utilisateur } from '../Model/Utilisateur';
import { MatchService } from '../service/match.service';
interface ItemData {
  id: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-ajout-match',
  templateUrl: './ajout-match.component.html',
  styleUrls: ['./ajout-match.component.css']
})
export class AjoutMatchComponent implements OnInit {
  
  disabled = false;
 
  listOfData: ItemData[] = [];
   public Satdes:  Stade[] = [];
   public Equipe:  Equipe[] = [];
   public Ligue:  Ligue[] = [];
   public Coeach : Utilisateur[]=[];
   public Match : Match[]=[];
   confirmModal?: NzModalRef;
   public match :any;
public idMatch:any;
  singleValue="";
  isVisible = false;
  isVisibleupdate=false;
  registerForm!:FormGroup;

  submitFormupdate():void{
    if (this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
    }
    else{
 
     
      let type   = this.registerForm.controls['type'].value;
      let ligue  = this.registerForm.controls['ligue'].value;
      let stade  = this.registerForm.controls['stade'].value;
      let Equipe = this.registerForm.controls['Equipe'].value;
      let Coach  = this.registerForm.controls['Coach'].value;


 this.match= {   
  "idMatch":this.idMatch,
   "type":type,
   "ligue":{"idLigue":ligue},
   "equipeAdversaire":{"idEquipe":Equipe},
   "coach":{"idUtil":Coach},
   "stade":{"idStade":stade}
   
}
    
       this.services.UpdateMatch(this.match)
       .subscribe(
         res => {
        
           alert("Update successfully");
           this.GetAllMatch();
           this.isVisibleupdate=false; 
  
         },
          err=>{
           alert(err.error.message)
         }
       );


    }


  }
  submitForm(): void {
 
      if (this.registerForm.invalid){
        this.registerForm.markAllAsTouched();
      }
      else{
 
     
        let type=this.registerForm.controls['type'].value;
        let ligue= this.registerForm.controls['ligue'].value;
        let stade= this.registerForm.controls['stade'].value;
        let Equipe=this.registerForm.controls['Equipe'].value;
        let Coach=this.registerForm.controls['Coach'].value;
  

   this.match= {   
     "type":type,
     "ligue":{"idLigue":ligue},
     "equipeAdversaire":{"idEquipe":Equipe},
     "coach":{"idUtil":Coach},
     "stade":{"idStade":stade}
     
  }
      
         this.services.AddMatch(this.match)
         .subscribe(
           res => {
          
             alert("Add successfully");
             this.GetAllMatch();
             this.isVisible=false; 
   
           },
            err=>{
             alert(err.error.message)
           }
         );
  
  
      }
    
  }
 
  showModalupdate(user:any): void {
    this.isVisibleupdate = true;
 
     this.idMatch=user.idMatch;
     this.registerForm.patchValue({
      type:user.type,
      ligue:user.ligue.nomLigue,
      stade:user.stade.nom,
      Equipe:user.equipeAdversaire.nom ,
      Coach:user.coach.username,
     })
  }
  showModal(): void {
    this.isVisible = true;
  }
 
  ngOnInit(): void {
    this.GetAllMatch();
    this.GetAllSatdes();

    this.GetAllEquipe();

    this.GetAllLigues();

    this.GetAllCoeach();
  }
  GetAllEquipe() {
    this.services.getEquipe().subscribe(res => {
      this.Equipe = res;
     });
  }
  GetAllMatch() {
    this.services.getAllMatch().subscribe(res => {
      this.Match = res;
     });
  }
  GetAllSatdes() {
    this.services.getstade().subscribe(res => {
      this.Satdes = res;
     });
  }
  GetAllCoeach() {
    this.services.getCoeach().subscribe(res => {
      this.Coeach = res;
     });
  }
  GetAllLigues() {
    this.services.getligue().subscribe(res => {
      this.Ligue = res;
     });
  }
constructor(private services :MatchService ,private formBuilder : FormBuilder ,private modal: NzModalService, private viewContainerRef: ViewContainerRef, private http:HttpClient ) {
    this.registerForm = new FormGroup({
      type: new FormControl(),
      ligue: new FormControl(),
      stade:new FormControl(),
      Equipe:new FormControl(),
      Coach:new FormControl(),

  });
  this.registerForm = this.formBuilder.group({

    type: ['', [Validators.required,  ]],
    ligue: ['', [Validators.required, ] ],
    stade:['', [Validators.required, ] ],
    Equipe:['', [Validators.required, ] ],
    Coach:['', [Validators.required, ] ],

 });
  }
  
  handleCancel(): void {
     this.isVisible = false;
  }
  handleCancelupdate(): void {
    this.isVisibleupdate = false;
 }
 showConfirm(id:any): void {
  this.confirmModal = this.modal.confirm({
    nzTitle: 'Do you Want to delete these Match?',
    
    nzOnOk: () =>
   
    
      new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
       this.services.DeleteMatch(id).subscribe(
        res=>{ 
          this.GetAllMatch();
      }
      );  
      
      }).catch(() => console.log('Oops errors!'))
  });
}
}
function updateValue(arg0: string) {
  throw new Error('Function not implemented.');
}

