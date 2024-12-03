import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-page1',
  template: `
    <h2>All About Ice Cream</h2>
    <p>Ice cream is a frozen dessert made from dairy products, such as milk and cream, and often combined with fruits, nuts, chocolate, and other flavorings. It is a favorite treat enjoyed around the world in various forms and flavors.</p>

    <h3>Key Ingredients</h3>
    <ul>
      <li>Milk</li>
      <li>Cream</li>
      <li>Sugar</li>
      <li>Flavorings (Vanilla, Chocolate, Strawberry, etc.)</li>
      <li>Fruit and Nuts (optional)</li>
    </ul>

    <h3>Popular Ice Cream Flavors</h3>
    <ul>
      <li>Vanilla</li>
      <li>Chocolate</li>
      <li>Strawberry</li>
      <li>Mint Chocolate Chip</li>
      <li>Cookies and Cream</li>
    </ul>

    <h3>Fun Ice Cream Facts</h3>
    <ul>
      <li>The world’s largest ice cream cone weighed over 2,400 pounds!</li>
      <li>Ice cream has been around for over 2,000 years, originating in ancient China.</li>
      <li>The average American consumes about 20 pounds of ice cream per year.</li>
    </ul>

    <p>Whether you're a fan of classic vanilla or adventurous flavors like salted caramel, ice cream remains a beloved treat for people of all ages.</p>
  `,
})
export class Page1Component {}
