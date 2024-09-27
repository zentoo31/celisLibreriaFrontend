import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('Guard ejecutado');

  return authService.isAuth().pipe(
    tap(isAuthenticated => {
      console.log('Resultado de autenticación desde el guard:', isAuthenticated);
      if (!isAuthenticated) {
        console.log('Usuario no autenticado, redirigiendo al login');
        router.navigate(['/home']);
      }
    }),
    catchError(err => {
      console.error('Error en la autenticación:', err);
      return of(false);
    })
  );
};