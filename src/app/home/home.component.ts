import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterModule],
  template: `
    <div style="text-align: center; font-family: Arial, sans-serif;">
      <!-- Header -->
      <header style="background-color: #dd0031; color: white; padding: 15px 0;">
        <h1>Welcome To My Angular Website</h1>
      </header>

      <!-- Main Content (Images for Navigation) -->
      <main style="margin: 20px auto; max-width: 800px; text-align: center;">
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
          <a routerLink="/page1">
            <img src="/image1.jpg" alt="Page 1" 
                 style="width: 250px; height: 250px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);" />
          </a>
          <a routerLink="/page2">
            <img src="/image2.jpg" alt="Page 2" 
                 style="width: 250px; height: 250px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);" />
          </a>
          <a routerLink="/page3">
            <img src="/image3.jpg" alt="Page 3" 
                 style="width: 250px; height: 250px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);" />
          </a>
          <a routerLink="/page4">
            <img src="/image4.jpg" alt="Page 4" 
                 style="width: 250px; height: 250px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);" />
          </a>
        </div>
      </main>
    </div>
  `,
})
export class HomeComponent {}
