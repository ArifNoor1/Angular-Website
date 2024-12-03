import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-page2',
  template: `
    <div style="text-align: center; margin: 20px auto; max-width: 800px; font-family: Arial, sans-serif;">
      <h2>All About Weather</h2>
      
      <p style="font-size: 18px; color: #555;">
        Weather refers to the atmospheric conditions in a particular location at a given time. It includes factors like temperature, humidity, precipitation, and wind speed.
      </p>

      <h3>Types of Weather Conditions</h3>
      <ul style="list-style-type: none; padding: 0;">
        <li style="margin: 10px 0; font-size: 16px; color: #333;">Sunny: Clear skies and high temperatures</li>
        <li style="margin: 10px 0; font-size: 16px; color: #333;">Rainy: Precipitation of water droplets from clouds</li>
        <li style="margin: 10px 0; font-size: 16px; color: #333;">Cloudy: Skies covered with clouds, reducing sunlight</li>
        <li style="margin: 10px 0; font-size: 16px; color: #333;">Windy: Strong winds blowing across the area</li>
        <li style="margin: 10px 0; font-size: 16px; color: #333;">Snowy: Precipitation of snowflakes when the temperature is low</li>
      </ul>

      <h3>Factors Affecting Weather</h3>
      <ul style="list-style-type: none; padding: 0;">
        <li style="margin: 10px 0; font-size: 16px; color: #333;">Temperature: The warmth or coldness of the atmosphere</li>
        <li style="margin: 10px 0; font-size: 16px; color: #333;">Humidity: The amount of moisture in the air</li>
        <li style="margin: 10px 0; font-size: 16px; color: #333;">Pressure: The weight of the air pushing down on the Earth's surface</li>
        <li style="margin: 10px 0; font-size: 16px; color: #333;">Wind: The movement of air from high to low-pressure areas</li>
      </ul>

      <h3>Fun Weather Facts</h3>
      <ul style="list-style-type: none; padding: 0;">
        <li style="margin: 10px 0; font-size: 16px; color: #333;">The highest recorded temperature on Earth is 56.7°C (134°F) in Death Valley, California.</li>
        <li style="margin: 10px 0; font-size: 16px; color: #333;">A single thunderstorm can contain up to 1 billion volts of electricity.</li>
        <li style="margin: 10px 0; font-size: 16px; color: #333;">The fastest wind speed ever recorded was 253 mph (407 km/h) in Australia.</li>
      </ul>

      <p style="font-size: 18px; color: #555;">
        Weather plays a critical role in our daily lives, affecting our activities, environment, and even our mood. From sunshine to storms, it’s something we all experience.
      </p>
    </div>
  `,
})
export class Page2Component {}
