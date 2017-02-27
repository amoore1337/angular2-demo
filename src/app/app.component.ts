import { Component } from "@angular/core";
@Component({
  selector: "my-app",
  styles: [ require("./app.less") ],
  templateUrl: "./app.template.html",
})
export class AppComponent  { name = "Angular";  }
