<<<<<<< HEAD
import { HttpClient} from '@angular/common/http'
=======
import { HttpClient } from '@angular/common/http'
>>>>>>> 5bc43845d815248b7953bfc5b23ba4142a8738b0
import { Injectable } from '@angular/core'

@Injectable()
export class AuthService{   
    path = 'http://localhost:3000/auth'

<<<<<<< HEAD
    TOKEN_KEY = 'token'

=======
>>>>>>> 5bc43845d815248b7953bfc5b23ba4142a8738b0
    constructor( private http: HttpClient) {}
    
    get token(){
        return localStorage.getItem(this.TOKEN_KEY)
    }

    registerUser(registerData) {
        this.http.post( this.path + '/register', registerData).subscribe(res => { 
        })
    }

    loginUser(loginData) {
        this.http.post<any>( this.path + '/login', loginData).subscribe(res => { 
            console.log(res)
<<<<<<< HEAD
            localStorage.setItem(this.TOKEN_KEY, res.token)
=======
            localStorage.setItem('token', res.token)
>>>>>>> 5bc43845d815248b7953bfc5b23ba4142a8738b0
        })
    }
}