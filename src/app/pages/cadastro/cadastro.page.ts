import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.page.html",
  styleUrls: ["./cadastro.page.scss"],
})
export class CadastroPage implements OnInit {
  credentials: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) {}

  // get nome(){
  //   return this.credentials.get('nome')
  // }
  get confsenha() {
    return this.credentials.get("confsenha");
  }

  get email() {
    return this.credentials.get("email");
  }

  get password() {
    return this.credentials.get("password");
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      // nome: ['', [Validators.required, Validators.email]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confsenha: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  async register() {
    if (this.password?.value === this.confsenha?.value) {
      const loading = await this.loadingController.create();
      await loading.present();

      const user = await this.authService.register(this.credentials.value);
      await loading.dismiss();

      if (user) {
        this.router.navigateByUrl("/home", { replaceUrl: true });
      } else {
        this.showAlert("Registro falhou", "tente novamente!");
      }
    } else {
      this.showAlert("Erro nas senhas", "as senhas não são iguais");
    }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl("/home", { replaceUrl: true });
    } else {
      this.showAlert("Login falhou", "tente novamente!");
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ["ok"],
    });
    await alert.present();
  }
}
