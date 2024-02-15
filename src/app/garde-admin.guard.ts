import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export const gardeAdminGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  // return true;
  if (localStorage.getItem('token')==null || localStorage.getItem('token')==undefined) {
    Swal.fire({
      icon:'error',
      text:'Connectez-vous si vous voulez acceder à cet espace',
      title:'Oops',
      confirmButtonColor: "#ff9711",
    }
  
    )
    router.navigate(['/auth']);
    return false;
  
  }else{
  
    return true;
  }
};
