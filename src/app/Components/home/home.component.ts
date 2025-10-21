import { Component } from '@angular/core';
import { CvComponent } from "../CV/cv.component";
import { PortfolioComponent } from '@components/portfolio/portfolio.component';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FloatingWindowComponent } from "@components/floating-window/floating-window.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CvComponent, PortfolioComponent, HeaderComponent, FooterComponent, FloatingWindowComponent],
  template: `
  <div class="flex-grow mt-5 w-full h-full">

    <div class="flex flex-col z-50 justify-between items-center">

      <app-cv class="w-full flex content-center justify-center"/>

      <app-portfolio class="w-full"/>

      <app-floating-window title="Old Portfolio" class="w-96 self-center">
        <div class="hover:cursor-hand flex justify-center flex-col items-center">
        <a  class="hover:cursor-hand w-full p-2 text-center"
            href="assets/V1/index.html" mat-button>Go</a>
        </div>
      </app-floating-window>

    </div>
  </div>
  `,
  styles: ``
})
export class HomeComponent {
  filler: string = "Graduate of the AI master's program at Sorbonne University. Experienced in Unity and .Net and some web development. Familiar with AI algorithms, HCI, as well as simulated and interactive environments. ";
}
