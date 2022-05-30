import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() data: any;
  @Input() superhero: any;

  constructor() { }

  ngOnInit(): void {
  }

}
