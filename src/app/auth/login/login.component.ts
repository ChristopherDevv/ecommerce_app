import { Component, Inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { PrimaryButtonMdComponent } from 'app/components/primary-button-md/primary-button-md.component';
import { CarouselModule } from 'primeng/carousel';
import { PrimarySpinnerComponent } from 'app/components/primary-spinner/primary-spinner.component';

import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { finalize } from 'rxjs';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthService } from '@api/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule, 
    ButtonModule, 
    ToastModule, 
    MessagesModule, 
    FormsModule,
    IconFieldModule,
    InputIconModule,
    PasswordModule,
    PrimaryButtonMdComponent,
    CarouselModule,
    PrimarySpinnerComponent,
    RouterLink,
  ], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService] // Añade MessageService a los proveedores del componente

})
export default class LoginComponent {
  constructor(private messageService: MessageService, public loginSvc: AuthService, private router: Router) {}
  messages: any[] = [];

  sidebarVisible: boolean = false;
  showSpinner: boolean = false;

  creadentials = {
    username:'',
    password: ''
  };

  formatFields() {
    this.creadentials = Object.fromEntries(
       Object.entries(this.creadentials).map(([key, value]) => [key, value = ''])
    ) as any;
  }


  handleLogin() {
    this.creadentials = Object.fromEntries(
      Object.entries(this.creadentials).map(([key, value]) => [key, value.replace(/\s/g, '')])
    ) as any;
    
     if(Object.values(this.creadentials).some(value => value === '')) {
       this.show('error', 'Error', 'Please, fill in all fields!');
     }
      else {
        this.showSpinner = true;

        this.loginSvc.login(this.creadentials.username, this.creadentials.password).pipe(
          finalize(() => this.showSpinner = false)
        ).subscribe(
          (loginResponse: any) =>  {
            this.loginSvc.appToken = loginResponse.token;
            this.show('success', 'Success', 'Login successful!');
            /* console.log(loginResponse); */
            setTimeout(() => {
              this.router.navigate(['/products']);
            }, 700);
          },
          error => {
            this.show('error', 'Error', 'An error ocurred');
            this.formatFields();
          }
        );
      }
  }

  testimonials = [
    {
      name: 'Juan Pérez',
      text: '¡Excelente servicio! Muy contento con los resultados.',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      name: 'María Rodríguez',
      text: 'Increíble experiencia. Recomiendo totalmente.',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png'
    },
    {
      name: 'Pedro Gómez',
      text: '¡Los mejores! No puedo estar más satisfecho.',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    {
      name: 'Ana López',
      text: '¡Muy buenos profesionales! 100% recomendados.',
      image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png'
    }
  ];

  // Método para mostrar el toast
  show(severity:string, summary:string, detail:string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail
    });
  }
}