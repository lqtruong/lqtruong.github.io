import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { Project } from '../projects';

import { LoginModalService, AccountService, Account, GhProjectService } from 'app/core';

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
    private eventManager: JhiEventManager,
    private projectService: GhProjectService
  ) {}

  ngOnInit() {
    this.accountService.identity().then((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
    this.initProjects();
  }

  initProjects() {
    this.projectService.getJSON().subscribe(projects => {
      projects.forEach(p => this.projects.push(p));
      console.log(this.projects);
    });
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
