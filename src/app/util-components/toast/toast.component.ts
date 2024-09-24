import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  isInvisible:boolean = false;
  message: string = "";

  ngOnInit(){

  }

  show(message:string){
    this.message = message;
    this.isInvisible = true;

    setTimeout(() => {
      this.closeToast();
    }, 3000);
  }

  closeToast(){
    this.isInvisible = false
  }
}
