import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonCreateComponent } from "./components/person/person-create/person-create.component";
import { PersonListComponent } from "./components/person/person-list/person-list.component";

const routes: Routes = [
  { path: "", component: PersonListComponent },
  { path: "person/create", component: PersonCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
