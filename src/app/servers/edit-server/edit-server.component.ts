import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Route, Params } from "@angular/router";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log(this.routes.snapshot.queryParams);
    // console.log(this.routes.snapshot.fragment);

    this.routes.queryParams.subscribe((params: Params) => {
      this.allowEdit = params["allowEdit"] === "1" ? true : false;
    });

    console.log(this.allowEdit);

    let id = +this.routes.snapshot.params["id"];

    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
