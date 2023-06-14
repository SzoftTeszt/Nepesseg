import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uj-felmeres',
  templateUrl: './uj-felmeres.component.html',
  styleUrls: ['./uj-felmeres.component.css']
})
export class UjFelmeresComponent {
  ujFelmeres:any={};
  errorMessage="";
  showError=false;
  oszlopok=["evszam", "magyar","nemet","szlovak","egyeb"]
  constructor(private bs: BaseService, private router:Router){
    this.ujFelmeres.evszam= new Date().getFullYear();
  }

  new(){
    this.bs.new(this.ujFelmeres)
    .then( ()=>this.router.navigate(['/adatok']))
    .catch((e)=>(
        console.log(e)      
    ))
  }

}
