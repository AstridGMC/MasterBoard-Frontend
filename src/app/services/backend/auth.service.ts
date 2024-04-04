import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, of } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ToasterService } from '../others/toaster.service';
import { ToasterEnum } from 'src/global/toaster-enum';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  headers: any;
  constructor(
    private http: HttpClient,
    private toasterService: ToasterService,
    private router: Router
  ) {}

  //login simulation
  login(credentials: any): void {
    this.http
      .post<any>(
        `${environment.gestorBackendUrl}auth/login`,
        credentials,
        {
          headers: this.headers,
        }
      )
      .pipe(
        mergeMap((token) => {
          console.log(token);
          this.storeToken(token.token);
          return of('');
        })
      )
      .subscribe({
        next: () => {
          console.log("subscribe");
          this.toasterService.show({
            message: 'Inicio de sesion exitoso',
            type: ToasterEnum.SUCCESS,
          });
          this.router.navigate(['/dashboard']);
        },

        error: () => {
          this.toasterService.show({
            message: 'Credenciales incorrectas',
            type: ToasterEnum.ERROR,
          });
        },
      });
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  storeToken(token: string): void {
    if (token.startsWith('Bearer ')) {
      token = token.substring('Bearer '.length);
    }
    localStorage.setItem('auth_token', token);
  }
}
