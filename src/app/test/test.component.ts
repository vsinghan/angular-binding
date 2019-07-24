import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Vishal";
  public siteUrl = window.location.href;
  public myId = "testId";


  constructor(private route:Router) { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

  onMoveToNext() {
    this.route.navigateByUrl("home");
  }
}
