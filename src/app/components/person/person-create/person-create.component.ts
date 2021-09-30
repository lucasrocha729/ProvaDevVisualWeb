import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PersonService } from "./../../../service/person.service";
import Person from "../../../models/person";

@Component({
  selector: "app-person-create",
  templateUrl: "./person-create.component.html",
  styleUrls: ["./person-create.component.css"],
})
export class PersonCreateComponent implements OnInit {
  personCreate: Person = { address: "", birthday: "", fullName: "", cpf: "" };

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {}
  createPerson(): void {
    this.personService.createPerson(this.personCreate).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }
}
