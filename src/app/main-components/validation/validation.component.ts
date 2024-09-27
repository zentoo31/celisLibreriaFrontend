import { Component, inject, ViewChild, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ToastComponent } from '../../util-components/toast/toast.component';
import { ToastService } from '../../services/toast.service';
import { catchError, map, of } from 'rxjs';
@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, ToastComponent],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css',
})
export class ValidationComponent {
  @ViewChild(ToastComponent) toast!: ToastComponent;
  isLogin: boolean  = false;
  authService = inject(AuthService);
  toastService = inject(ToastService);

  ngAfterViewInit() {
    this.toastService.registerToast(this.toast);
  }

  showToast(message:string) {
    this.toastService.show(message);
  }

  authForm = new FormGroup({
    nombre: new FormControl('',this.isLogin ? Validators.required: []),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  async Auth() {
    if (this.authForm.valid) {
      const formValue = this.authForm.value;
      try {
        if (this.isLogin) {
          await this.register(formValue);
        } else {
          await this.login(formValue);
        }
      } catch (error: any) {
        this.showToast(`${error.error.message}`);
      }
    }
  }
  
  private async register(formValue: any) {
    const response = await this.authService.register(formValue);
    if (response === true) {
      this.showToast('Usuario registrado con éxito!!');
      this.isLogin = false;
    } else {
      this.showToast('Registro fallido!!');
    }
  }
  
  private async login(formValue: any) {
    const response = await this.authService.login(formValue);
    this.showToast(response.message);
  }

  isAuth() {
    this.authService.isAuth().pipe(
      map(isAuthenticated => {
        console.log(isAuthenticated); // Aquí se hace el log del valor emitido
        if (isAuthenticated) {
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => {
        return of(false);
      })
    ).subscribe(result => {
    });
  }

}
