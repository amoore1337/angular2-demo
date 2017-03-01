import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Router }        from  "@angular/router";


import { AppComponent }     from "./app.component";
import { AppRoutingModule } from './app.routing.module';

import { NavBarModule }  from "./nav-bar";

import '../styles/globals.less';

@NgModule({
    imports: [ BrowserModule, NavBarModule, AppRoutingModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
