import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  formid: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formid = this.route.snapshot.paramMap.get('id') || "test"
  }
}
