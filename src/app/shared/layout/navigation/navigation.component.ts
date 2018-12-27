import {Component, OnInit} from '@angular/core';
import {LoginInfoComponent} from "../../user/login-info/login-info.component";
import { AuthService } from "@app/core/services/auth.service";
import { RemoteApiService } from '@app/core/services/remote-api.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  providers: [ AuthService, RemoteApiService ],
  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  authorizations: Array<any>;
  constructor(private authServ: AuthService) {
  }

  ngOnInit() {
    this.authServ.authorizations('trostelm').subscribe(auths => {
      this.authorizations = auths.authorizations;
      console.log(this.authorizations);
    });
  }

  ngAfterViewInit(){

  }

  stringify(obj: Object): string {
    return (JSON.stringify(obj));
  }

  filterParentItems() {
    if(this.authorizations != null){
      return this.authorizations.filter(item => item.parent == true);
    }
  }

  retrieveChildItems(auth) {
    return this.authorizations.filter(item => item.submenu == true && item.parentId == auth.id);
  }

  retrieveChildImgMessage(auth) {
      return auth.title == 'Outlook' ? true : false;
   }

}
