import { Component } from '@angular/core';
import { CvComponent } from "../CV/cv.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CvComponent],
  template: `
  <!-- BACKGROUD -->


    <div class="flex flex-col z-50 justify-center">
      <app-windows></app-windows>
    </div>



  `,
  styles: ``
})
export class HomeComponent {
  filler: string = "Graduate of the AI master's program at Sorbonne University. Experienced in Unity and .Net and some web development. Familiar with AI algorithms, HCI, as well as simulated and interactive environments. ";
}
