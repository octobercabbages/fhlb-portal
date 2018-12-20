import { Component, OnInit } from '@angular/core';
import { TestService } from '@app/core/services/test.service';
import { RemoteApiService } from '@app/core/services/remote-api.service';

@Component({
    selector: 'sa-test-component',
    templateUrl: './test.component.html',
    providers: [ TestService, RemoteApiService ]
})

export class TestComponent{
    users: Array<{name: string, email: string }> = new Array();
    constructor(private testService: TestService)
    {

    }

    ngOnInit() {
        this.testService.getUsers().subscribe(items => { 
            items.forEach(element => {
                this.users.push({ name: element.name, email: element.email });
            });
           
        })
    }
}

