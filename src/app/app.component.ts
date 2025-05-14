import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <!-- Background -->
    <div class="flex w-full fixed bg-gray-200 z-0 overflow-hidden h-screen">
      <p class="m-auto text-justify text-2xl font-light w-full font-times text-white select-none cursor-default">
      {{filler.repeat(40)}}
      </p>
    </div>

    <div class="min-h-screen relative flex flex-col select-none cursor-pixel font-avenir">
      <app-header/>

      <router-outlet/>
  
      <app-footer/>
    </div>
  `,
})
export class AppComponent {
  title = 'portfolio';

  filler: string = "Graduate of the AI master's program at Sorbonne University. Experienced in Unity and .Net and some web development. Familiar with AI algorithms, HCI, as well as simulated and interactive environments. ";

  constructor(private router: Router) { }
  
  // ngOnInit(): void {
  //   //route to /otw
  //   // this.router.navigate(['/otw']);
  // }
}
