import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { LoginCard } from "./login-card/login-card";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, LoginCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'quantum-login';
}
