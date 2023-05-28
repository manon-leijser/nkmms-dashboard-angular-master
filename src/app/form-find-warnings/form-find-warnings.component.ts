import { Component, OnInit} from '@angular/core';
import { FindWarnings } from '../find-warnings.service/find-warnings';
import { FindWarningsComponent } from '../find-warnings.component/find-warnings.component';

@Component({
  selector: 'app-form-find-warnings',
  templateUrl: './form-find-warnings.component.html',
  styleUrls: ['./form-find-warnings.component.css']
})

export class FormFindWarningsComponent implements OnInit{

  findWarnings: FindWarnings = new FindWarnings();
  submitted = false;
  circuit_nrInput = 0;
  locationInput = 0;
  decision_typeInput = "";

  constructor(
  ) { }

  ngOnInit(): void { }

  newFindWarnings() {
    this.submitted = false;
    this.findWarnings = new FindWarnings();
  }

  onKeyCircuitNr(circuit_nr: string) {
    this.circuit_nrInput = +circuit_nr
  }

  onKeyLocation(location: string) {
    this.locationInput = +location
  }

  onKeyDecisionType(decision_type: string) {
    this.decision_typeInput = decision_type
  }

  onSubmit() {
    this.submitted = true;
  }

}