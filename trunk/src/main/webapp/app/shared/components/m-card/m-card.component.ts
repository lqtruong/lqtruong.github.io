import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-m-card',
  templateUrl: './m-card.component.html',
  styleUrls: ['./m-card.component.scss']
})
export class MCardComponent implements OnInit {
  @Input() hero: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.hero);
  }
}
