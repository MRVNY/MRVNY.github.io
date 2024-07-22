import { Component } from '@angular/core';
import { WindowsViewComponent } from "../windows-view/windows-view.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WindowsViewComponent],
  template: `
  <!-- BACKGROUD -->
    

    <div class="flex flex-col z-50 justify-center items-center">
      <app-windows-view></app-windows-view>
    </div>


   
  `,
  styles: ``
})
export class HomeComponent {
  filler: string = "Graduate of the AI master's program at Sorbonne University. Experienced in Unity and .Net and some web development. Familiar with AI algorithms, HCI, as well as simulated and interactive environments. ";
}
