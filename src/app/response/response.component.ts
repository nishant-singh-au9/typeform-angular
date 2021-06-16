import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Response } from '../model/responseModel'

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  postUrl = "http://localhost:3000/response"
  formid: string = "";
  responses : Response[] = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  submitHandler() {
    console.log(this.formid)
    fetch(this.postUrl, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ formid: this.formid })
    })
      .then(res => res.json())
      .then(data => {
        this.responses = data
        console.log(data[0].form_id)
      })
      .catch(err => console.log('error is occurred', err))
  }
}
