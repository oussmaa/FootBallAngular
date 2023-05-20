import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Actualite } from '../Model/Actualite';
import { Commantaire } from '../Model/Commantaire';
import { ActualiteService } from '../service/actualite.service';
interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}
 
@Component({
  selector: 'app-actulatite',
  templateUrl: './actulatite.component.html',
  styleUrls: ['./actulatite.component.css']
})
export class ActulatiteComponent implements OnInit {
 
  public Actualite : Actualite[]=[];
  public Commantaire : Commantaire[]=[];
  public Commant:any; 
  registerForm!:FormGroup;

  constructor(public services:ActualiteService, private formBuilder : FormBuilder ,private modal: NzModalService ) {


    this.registerForm = new FormGroup({
      label: new FormControl(),
    
   
  
  
  });
  
   
  this.registerForm = this.formBuilder.group({
  
    label: ['', [Validators.required,  ]],
 
   
  
  });
  }
  

  
  ngOnInit(): void {
    this.GetAllActualite() ;
   }
  AfficheComment(id:any)
  {
    alert(id)
     id=!id;;
  }

  GetAllActualite() {
    this.services.getAllActualite().subscribe(res => {
      console.log(res)
      this.Actualite = res;
    
     });
  }
  GetAllCommantById(id:any) {
    this.services.getAllCommantaireByIdActualite(id).subscribe(res => {
      this.Commantaire = res;
     });
  }

  loadData(pi: number): void {
 
  }
}
