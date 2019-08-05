import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../../projects';
import { map } from 'rxjs/operators';
// var data = require('./projects.json');
// import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GhProjectService {
  url = 'https://api.github.com/users/lqtruong/repos';
  excluses = ['blog', 'lqtruong.github.io'];

  constructor(private client: HttpClient) {}

  public getJSON(): Observable<Project[]> {
    return this.client.get<Project[]>(this.url).pipe(
      map((data: any[]) => data.filter((f: any) => this.showed(f)).map((item: any) => this.newProject(item))) // return of(<Project[]>data);
    );
  }

  newProject(data): Project {
    const proj = new Project();
    proj.id = data.id;
    proj.icon = '../content/images/github-logo.jpg';
    proj.img = '../content/images/github-logo.jpg';
    proj.name = data.name;
    proj.desc = data.description;
    proj.reflink = data.html_url;
    proj.created_at = data.created_at;
    proj.updated_at = data.updated_at;
    proj.pushed_at = data.pushed_at;
    proj.techs = data.language;
    proj.license = data.license;
    return proj;
  }

  showed(f) {
    return f && f.name && f.description && this.notIn(f, this.excluses);
  }

  notIn(f, excluses) {
    const existing = excluses.filter(e => e === f.name);
    return !(existing && existing.length > 0);
  }
}
