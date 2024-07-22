import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
  <!-- Background -->
  <div class="flex w-full absolute top-0 bg-gray-200 z-0 overflow-hidden">
    <p class="m-auto text-justify text-2xl font-light w-full font-times text-white select-none cursor-default">
      {{filler.repeat(40)}}
    </p>
  </div>
  <!-- Border -->
  <!-- <div class="flex absolute top-0 w-screen h-screen border-4 z-50 border-black">
  </div> -->

    <div class="min-h-screen relative flex flex-col select-none cursor-pixel">
      <app-header/>
      

      <div class="flex-grow mt-28 w-full h-full">
        <router-outlet/>
      </div>

      <app-footer/>
      <!-- <div class="fixed bottom-0 w-full h-10 bg-black"></div> -->
    </div>

  `,
  styles: [],
})
export class AppComponent {
  title = 'portfolio';

  filler: string = "Graduate of the AI master's program at Sorbonne University. Experienced in Unity and .Net and some web development. Familiar with AI algorithms, HCI, as well as simulated and interactive environments. ";
}
