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
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  schoolType: string = '';
  
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

  onSubmit() {
    if(!this.schoolType || !this.selectedDistrict || !this.selectedState || !this.username || !this.password){
      console.log('fill all required fields');
    } else {
      console.log({
        schoolType: this.schoolType,
        state: this.selectedState,
        district: this.selectedDistrict,
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe,
      })
    }
    
  }
}
