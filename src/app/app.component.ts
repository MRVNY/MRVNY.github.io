import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
  
  <!-- Border -->
  <!-- <div class="flex absolute top-0 w-screen h-screen border-4 z-50 border-black">
  </div> -->

  <router-outlet/>
  
  `,
})
export class AppComponent {
  title = 'portfolio';

  filler: string = "Graduate of the AI master's program at Sorbonne University. Experienced in Unity and .Net and some web development. Familiar with AI algorithms, HCI, as well as simulated and interactive environments. ";
}
