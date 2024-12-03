import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],  // Include RouterModule in the imports
  template: `
    <div style="text-align: center; font-family: Arial, sans-serif;">
      <!-- Router Outlet to display dynamic content -->
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
