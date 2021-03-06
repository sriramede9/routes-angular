import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { ErrorPageComponent } from "./error-page/error-page.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "servers",
    component: ServersComponent,
    children: [
      { path: ":id/edit", component: EditServerComponent },
      { path: ":id", component: ServerComponent },
    ],
  },
  {
    path: "users",
    component: UsersComponent,
    children: [
      { path: ":id", component: UserComponent },
      { path: ":id/:name", component: UserComponent },
    ],
  },
  {
    path: "not-found",
    component: ErrorPageComponent,
  },
  {
    path: "**",
    redirectTo: "/not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [appRoutes],
})
export class routingModule {}
