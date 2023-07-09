import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';


export const adminGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService)
  const router = inject(Router)
  console.log(route)

  if (loginService.isLoggedIn() && loginService.getUserRole() === 'ADMIN') {
    return true;
  } 

  if (loginService.isLoggedIn()) {
    router.navigate(['/normal'])
  } else {
    router.navigate(['/login'])
  }

  return false;
};
