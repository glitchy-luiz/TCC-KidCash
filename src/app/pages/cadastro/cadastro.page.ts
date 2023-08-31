import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { }
  nome: any;
  password: any;
  email: any;
  senhaconf: any;

  ngOnInit() {
  }

  cadastrar(){
    if(this.password == this.senhaconf){
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}


}

}
