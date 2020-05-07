import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private routes: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: +this.routes.snapshot.params["id"],
      name: this.routes.snapshot.params["name"],
    };
    this.routes.params.subscribe((params: Params) => {
      (this.user.id = +params["id"]), (this.user.name = params["name"]);
    });
  }
}
