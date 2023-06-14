import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-adatok',
  templateUrl: './adatok.component.html',
  styleUrls: ['./adatok.component.css']
})
export class AdatokComponent {
  adatok:any;
  oszlopok=["evszam", "magyar","nemet","szlovak","egyeb"]
  oszlopokHU=["Évszám", "Magyar","Német","Szlovák","Egyéb Lakosság"]
  constructor(private bs:BaseService){
    this.bs.get().snapshotChanges().pipe(
      map(
        ch=>ch.map(c=>({key:c.payload.key, ...c.payload.val()}))
      )
    ).subscribe((a)=>this.adatok=a)
  }
}
