import { Component } from '@angular/core';
import { CvComponent } from "../CV/cv.component";
import { PortfolioComponent } from '@components/portfolio/portfolio.component';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CvComponent, PortfolioComponent, HeaderComponent, FooterComponent],
  template: `
  <div class="flex-grow mt-5 w-full h-full">

    <div class="flex flex-col z-50 justify-between items-center">

      <app-cv class="w-full flex content-center justify-center">

        </app-cv>

      <app-portfolio class="w-full"/>

    </div>
  </div>
  `,
  styles: ``
})
export class HomeComponent {
  filler: string = "Graduate of the AI master's program at Sorbonne University. Experienced in Unity and .Net and some web development. Familiar with AI algorithms, HCI, as well as simulated and interactive environments. ";
}
