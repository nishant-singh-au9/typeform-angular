import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Choices} from '../model/choices.model'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})



export class FormComponent implements OnInit {
  Choices = new Choices()
  title: string = "";
  description: string = "";
  options : Choices[] = []
  postUrl = "http://localhost:3000/forms"
  @Output() formchange = new EventEmitter<{formid: string}>();
  formid: string = ""

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.Choices = new Choices()
    this.options.push(this.Choices);
  }


  submitHandler() {
    const pollObj = {
      title : this.title,
      type : "quiz",
      fields : [
          {
              title: this.title,
              properties: {
                  description: this.description,
                  choices: this.options
              },
              validations: {
                  required: true
              },
              type: "multiple_choice"
          }
      ],
      thankyou_screens: [
      {
        title: "Thankyou for the feedback",
        properties: {
          show_button: false
        }
      }
    ]
  }

  fetch(this.postUrl, {method: 'POST', 
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(pollObj)
  })
  .then(res => res.json())
  .then(data => {
    this.formid = data.formid
  })
  .catch(err => console.log('error is occurred', err))
}

  addChoices(){
  this.Choices = new Choices()
  this.options.push(this.Choices);
  console.log(this.options)
  }

  removeChoices(index : number){
    this.options.splice(index)
  }
}
