import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit() {
  }

}
 
var user = { firstName: "Tiger", lastName: "Liu" };

    console.log(greeter(user));
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName.toUpperCase() + " " + person.lastName;
}