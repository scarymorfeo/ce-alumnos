import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/internal/operators/map';


@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  urlServidor: string = 'http://localhost:8084/ce/'
  datoUsuario: any;
  constructor(public afAuth: AngularFireAuth, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();}

    public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<User>(this.urlServidor + `authenticate`, { username, password })
        .pipe(map(User => {
            // login successful if there's a jwt token in the response
            if (User && User.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(User));
                this.currentUserSubject.next(User);
                this.datoUsuario = JSON.parse(localStorage.getItem('currentUser'));
                console.log(this.datoUsuario);
            }

            return User;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
  // Facebook login
  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  // Github login
  doGitHubLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GithubAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  // Twitter login
  doTwitterLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  // Google login
  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  // Register
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
  });
  }

  // Login
  doLogin(username: string, password: string) {

  }

  // Logout
  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('remember');
        this.afAuth.auth.signOut();
        resolve();
      } else {
        localStorage.removeItem('currentUser');
        resolve();
      }
    });
  }
}
