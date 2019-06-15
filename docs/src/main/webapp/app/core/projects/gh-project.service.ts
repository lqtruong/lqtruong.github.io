import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Project } from '../../projects';
var data = require('./projects.json');
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GhProjectService {
  constructor() {}
  public getJSON(): Observable<Project[]> {
    return of(<Project[]>data);
  }
}
