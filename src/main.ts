import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component'; // Import HomeComponent
import { Page1Component } from './app/page1/page1.component';
import { Page2Component } from './app/page2/page2.component';
import { Page3Component } from './app/page3/page3.component';
import { Page4Component } from './app/page4/page4.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route points to HomeComponent
      { path: 'home', component: HomeComponent }, // Home route
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'page3', component: Page3Component },
      { path: 'page4', component: Page4Component },
    ]),
  ],
});
