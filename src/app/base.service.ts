import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Nepesseg } from './nepesseg';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refLakossag: AngularFireList<Nepesseg>

  constructor(private db:AngularFireDatabase) { 
    this.refLakossag=this.db.list("/lakossag")
  }

  get(){
    return this.refLakossag;
  }

  new(body:any){
    return this.refLakossag.push(body);
  }
}
