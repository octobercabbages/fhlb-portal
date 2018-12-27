import {NgModule} from "@angular/core";

import {routing} from "./wires.routing";
import {WiresComponent} from "./wires.component";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
    declarations: [
        WiresComponent
    ],
    imports: [
        SharedModule,
        routing
    ],
    providers: []
})

export class WiresModule {
    
}

