import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Survey Poll Generator';
  formid = "";


  formIdChangeHandler(e:{formid: string}){
    console.log(e.formid)
    this.formid = e.formid
  }
}
