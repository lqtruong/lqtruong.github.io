import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;
  hero: any;

  constructor(private accountService: AccountService, private loginModalService: LoginModalService) {}

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.hero = {
      name: 'haha',
      age: 32,
      avatarBlurredUrl:
        'https://firebasestorage.googleapis.com/v0/b/ismaestro-angularexampleapp.appspot.com/o/heroes-images%2Fo0OFH4ddtfekOwK3ZKds-blurred.jpg?alt=media&token=61c07324-17ed-40cf-b3b5-187181f0fdc4',
      avatarUrl:
        'https://firebasestorage.googleapis.com/v0/b/ismaestro-angularexampleapp.appspot.com/o/heroes-images%2Fo0OFH4ddtfekOwK3ZKds.jpg?alt=media&token=7cdac0a0-ac21-4203-943e-1cabe0c71f4c',
      avatarThumbnailUrl:
        'https://firebasestorage.googleapis.com/v0/b/ismaestro-angularexampleapp.appspot.com/o/heroes-images%2Fo0OFH4ddtfekOwK3ZKds-thumbnail.jpeg?alt=media&token=c39680fe-be8a-408f-89aa-bc4a2fd99ce7'
    };
    console.log('ahahah');
    // console.log(this.hero);
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
