import { Component, OnInit } from "@angular/core";
import Person from "src/app/models/person";
import { PersonService } from "src/app/service/person.service";

@Component({
  selector: "app-person-list",
  templateUrl: "./person-list.component.html",
  styleUrls: ["./person-list.component.css"],
})
export class PersonListComponent implements OnInit {
  dataPerson: Person[] = [{ address: "", birthday: "", fullName: "", cpf: "" }];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.listAllPerson().subscribe((person: any) => {
      this.dataPerson = person;
      console.log(this.dataPerson);
    });
  }

  displayedColumns: string[] = ["fullName", "birthdate", "cpf", "address"];
  // dataSource = this.dataPerson;
}
