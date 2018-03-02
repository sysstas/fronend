import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
    registerData = {}

    //getting access to api service
    constructor( private authService: AuthService) {}

    //function post
    post() {
        console.log(this.registerData);
        this.authService.registerUser(this.registerData)
    }
}
