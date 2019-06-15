import { Component, OnInit, Input } from '@angular/core';
import { Project } from './gh-project.model';

@Component({
  selector: 'gh-project',
  templateUrl: './gh-project.component.html',
  styleUrls: ['./gh-project.component.scss']
})
export class GhProjectComponent implements OnInit {
  @Input() project: Project;
  constructor() {}

  ngOnInit() {}
}
