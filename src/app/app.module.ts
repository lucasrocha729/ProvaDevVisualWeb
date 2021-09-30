import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";

import { AppComponent } from "./app.component";
import { PersonCreateComponent } from "./components/person/person-create/person-create.component";
import { PersonListComponent } from "./components/person/person-list/person-list.component";

@NgModule({
  declarations: [AppComponent, PersonCreateComponent, PersonListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
