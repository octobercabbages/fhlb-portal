import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";
import {WiresComponent} from "./wires.component";

export const routes:Routes = [
    {
        path: '',
        component: WiresComponent
    }
]

export const routing = RouterModule.forChild(routes);