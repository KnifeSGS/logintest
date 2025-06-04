import { Component, inject, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {
  GoogleSigninButtonDirective,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonLabel,
    IonList,
    IonItem,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
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
}
