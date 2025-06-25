import { Component, inject, OnInit } from '@angular/core';
import { StateDataService } from '../services/StateDataService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-card',
  imports: [FormsModule],
  templateUrl: './login-card.html',
  styleUrl: './login-card.css'
})
export class LoginCard {
  private stateDataService = inject(StateDataService);

  stateDistrictData: { [key: string]: string[] } = {};
  states: string[] = [];
  districts: string[] = [];

  selectedState: string = '';
  selectedDistrict: string = '';
  
  ngOnInit(): void {
    this.stateDataService.getStatesAndDistrict().subscribe(data => {
      this.stateDistrictData = data;
      this.states = Object.keys(data);
    })
  }

  onStateChange(): void {
    this.districts = this.stateDistrictData[this.selectedState] || [];
    this.selectedDistrict = '';
  }
}
