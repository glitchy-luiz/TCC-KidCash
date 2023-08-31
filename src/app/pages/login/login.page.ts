import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }
  email: any;
  password: any;

  ngOnInit() {
  }

  entrar(){
  const auth = getAuth();
  signInWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

}

