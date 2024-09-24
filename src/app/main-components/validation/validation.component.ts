import { Component, inject, ViewChild, viewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ToastComponent } from '../../util-components/toast/toast.component';
import { ToastService } from '../../services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
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
  userService = inject(UserService);
  toastService = inject(ToastService);

  ngAfterViewInit() {
    this.toastService.registerToast(this.toast);
  }

  showToast(message:string) {
    this.toastService.show(message);
  }

  regiterForm = new FormGroup({
    nombre: new FormControl('',this.isLogin ? Validators.required: []),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  async onRegister(){
    if (this.regiterForm.valid && this.isLogin) {
      const formValue = this.regiterForm.value;
      const response = await this.userService.register(formValue);
        if (response === true) {
          this.showToast('Usuario registrado con éxito!!');
        }else if (response === HttpErrorResponse){
          this.showToast('Registro fallido!!');
        }
    }
  }

}
