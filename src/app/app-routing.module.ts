import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    data: { pageTitle: "" },
    children: [

      {
        path: "",
        loadChildren: "app/features/home/home.module#HomeModule",
        data: { pageTitle: "Home" }
      },

      {
        path: "wires",
        loadChildren: "app/features/wires/wires.module#WiresModule",
        data: { pageTitle: "Wires" }
      },
      {
        path: "outlook",
        loadChildren: "app/features/outlook/outlook.module#OutlookModule",
        data: { pageTitle: "Outlook" }
      }
    ]
  },

  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: "./features/auth/auth.module#AuthModule"
  },
  { path: "**", redirectTo: "miscellaneous/error404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
