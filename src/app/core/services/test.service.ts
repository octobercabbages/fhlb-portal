import { Injectable } from '@angular/core';
import { RemoteApiService } from "../../core/services/remote-api.service";
import { Subject } from 'rxjs';

@Injectable()
export class TestService {
    url: string;
    
    public messageToSubject;
    public response;

    constructor(private remoteApiService: RemoteApiService) {
        this.url = 'https://jsonplaceholder.typicode.com/users';
        this.messageToSubject = new Subject();

    }

    getUsers() {
        return this.remoteApiService.fetch(this.url)
    }
}