import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BudapestLakossaga';
  constructor(private ms:NgbModal){}
  public open(m:any){
    this.ms.open(m);
  }
}
