<<<<<<< HEAD
import { HttpClient} from '@angular/common/http'
=======
import { HttpClient } from '@angular/common/http'
>>>>>>> 5bc43845d815248b7953bfc5b23ba4142a8738b0
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService{
    messages = []
    users = []
    path = 'http://localhost:3000'

    constructor( private http: HttpClient) {}

    getMessages(userId) {
        this.http.get<any>( this.path + '/posts/' + userId).subscribe(res => {
            this.messages = res
        })
    }
    
    postMessage(message) {
        this.http.post( this.path + '/post', message).subscribe(res => {            
        })
    }

    getUsers() {
        this.http.get<any>( this.path + '/users').subscribe(res => {
            this.users = res
        })
    }

    getProfile(id) {
        return this.http.get( this.path + '/profile/' + id)
    }
}