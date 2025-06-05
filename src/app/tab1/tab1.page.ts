import { Component, inject, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import {
  GoogleLoginProvider,
  GoogleSigninButtonDirective,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonCardSubtitle,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    GoogleSigninButtonDirective,
  ],
})
export class Tab1Page implements OnInit {
  constructor() {}

  #authService = inject(SocialAuthService);
  user!: SocialUser;
  loggedIn!: boolean;

  ngOnInit(): void {
    this.#authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      console.log('User state changed:', this.user);
    });
  }

  signOut(): void {
    this.#authService.signOut().then(() => {
      this.loggedIn = false;
      console.log('User signed out');
    });
  }

  refreshToken(): void {
    this.#authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
