import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { Project } from '../projects';

import { LoginModalService, AccountService, Account } from 'app/core';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {
  account: Account;
  modalRef: NgbModalRef;

  projects: Project[] = [];

  constructor(
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private eventManager: JhiEventManager
  ) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
    this.initProjects();
  }

  initProjects() {
    const proj = new Project();
    proj.name = 'Proj 1';
    proj.title = 'Proj 1 title';
    proj.desc = 'Proj 1 description';
    proj.icon = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    this.projects.push(proj);

    const proj2 = new Project();
    proj2.name = 'Proj 2';
    proj2.title = 'Proj 2 title';
    proj2.desc = 'Proj 2 description';
    this.projects.push(proj2);
    console.log(this.projects);

    const proj3 = new Project();
    proj3.name = 'proj3';
    proj3.title = 'proj3 title';
    proj3.desc = 'proj3 description';
    this.projects.push(proj3);
    console.log(this.projects);

    const proj4 = new Project();
    proj4.name = 'proj4';
    proj4.title = 'proj4 title';
    proj4.desc = 'proj4 description';
    this.projects.push(proj4);
    console.log(this.projects);
  }

  registerAuthenticationSuccess() {
    this.eventManager.subscribe('authenticationSuccess', message => {
      this.accountService.identity().then(account => {
        this.account = account;
      });
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.modalRef = this.loginModalService.open();
  }
}
