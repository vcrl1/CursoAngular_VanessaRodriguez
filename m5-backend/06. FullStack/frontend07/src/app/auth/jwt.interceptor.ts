import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor(){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        let token = localStorage.getItem('jwt_token')

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}` //Ese dato va fijo y luego va el token
                }
            })
        }

        return next.handle(request)
    }

}