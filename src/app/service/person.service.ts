import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Person from "../models/person";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  private BASE_URL = "https://localhost:5001/api/person";

  constructor(private httpClient: HttpClient) {}

  createPerson(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(`${this.BASE_URL}/create`, person);
  }

  listAllPerson(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(`${this.BASE_URL}/list`);
  }
}
