import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from "@app/core/services/auth.service";
import { RemoteApiService } from "@app/core/services/remote-api.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService, RemoteApiService]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  data: Observable<any>;
  constructor(private router: Router, private authServ: AuthService) { 
  }

  ngOnInit() {
    
  }

  login(){
    event.preventDefault();

  
        this.router.navigate(['/home']);
    //console.log(this.data);
    //alert(JSON.stringify(this.data));
    //this.router.navigate(['/home'])
  }

}
