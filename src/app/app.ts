import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // ✅ add RouterModule here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
