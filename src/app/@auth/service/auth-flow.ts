import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  updateProfile,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthFlow {
  private router = inject(Router);
  private fireAuth = inject(Auth);
  private getFireAuth = getAuth();
  private googleProvider = new GoogleAuthProvider();

  constructor() {
    this.fireAuth.onAuthStateChanged((res) => {
      console.log('auth state changed', res);
    });
  }

  async userSignupWithEmailPassword(email: string, password: string, fullName: string) {
    return await createUserWithEmailAndPassword(this.fireAuth, email, password).then((userCred) => {
      updateProfile(userCred.user, {
        displayName: fullName,
      });

      return this.fireAuth.currentUser;
    });
  }

  async userSigninWithEmailPassword(email: string, password: string) {
    return await signInWithEmailAndPassword(this.fireAuth, email, password).then((userCred) => {
      console.log(userCred, 'user cred');
      return userCred;
    });
  }

  async signInWithGoogle() {
    await signInWithPopup(this.fireAuth, this.googleProvider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async signInWithGoogleRedirect() {
    await signInWithRedirect(this.fireAuth, this.googleProvider)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  async handleRedirectCallback() {
    await getRedirectResult(this.getFireAuth)
      .then((result) => {})
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  handleUserLogin() {}
}
