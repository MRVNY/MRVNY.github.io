import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="z-50 flex justify-center w-full">
      <div class="bg-black text-white text-6xl font-pixel flex flex-col items-center p-4 pb-0">
        <a class="text-6xl"
        routerLink="/home">Qingyuan YAO</a>
        <a class="text-2xl"
        routerLink="/home">(aka. Game/App/Web Developer)</a>
      </div>
    </nav>
  `,
  styles: ``
})
export class HeaderComponent {

}
