import { Injectable } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    intercept(req, nex){
        var authRequest = req.clone({
            
        })
        return nex.handle(req)
    }
}