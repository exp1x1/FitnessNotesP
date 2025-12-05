import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  updateProfile,
  User,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthErrorMap } from '../enum/auth-error-enum';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthFlow {
  private router = inject(Router);
  private fireAuth = inject(Auth);
  private getFireAuth = getAuth();
  private googleProvider = new GoogleAuthProvider();
  private authErrorMessages = AuthErrorMap;

  public $user = signal<User | null>(null);
  public authReady = signal(false);

  constructor() {
    this.fireAuth.onAuthStateChanged(
      (res: User | null) => {
        this.$user.set(res);
        this.authReady.set(true);
        console.log('auth state changed', this.$user());
      },
      (err) => {
        this.authReady.set(true);
        console.log('auth state change error', err);
      }
    );
  }

  async userSignupWithEmailPassword(email: string, password: string, fullName: string) {
    return await createUserWithEmailAndPassword(this.fireAuth, email, password).then((userCred) => {
      updateProfile(userCred.user, {
        displayName: fullName,
      });
      this.handleRedirectToDashboard();

      return this.fireAuth.currentUser;
    });
  }

  async userSigninWithEmailPassword(email: string, password: string) {
    return await signInWithEmailAndPassword(this.fireAuth, email, password).then((userCred) => {
      this.handleRedirectToDashboard();
      return userCred;
    });
  }

  async signInWithGoogle() {
    await signInWithPopup(this.fireAuth, this.googleProvider)
      .then((res) => {
        this.handleRedirectToDashboard();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async signInWithGoogleRedirect() {
    return await signInWithRedirect(this.fireAuth, this.googleProvider)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  // called in app component on init to check for redirect result
  async handleRedirectCallback() {
    await getRedirectResult(this.getFireAuth)
      .then((result) => {
        console.log(result, 'redirect result');
        if (result) {
          this.handleRedirectToDashboard();
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  handleAuthError(messageService: MessageService, errorCode: string) {
    messageService.clear();
    messageService.add({
      severity: 'error',
      summary: 'Error',
      detail:
        this.authErrorMessages[errorCode as keyof typeof this.authErrorMessages] ||
        'An unknown error occurred',
      sticky: true,
      key: 'tc',
    });
  }

  handleRedirectToDashboard() {
    this.router.navigate(['']);
  }
}
