import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <nav class="font-extralight fixed bottom-0 w-full bg-black text-white z-50 overscroll-contain">
      <div class="flex justify-center pt-10">
      Qingyuan YAO © 2024
      </div>
    </nav>
  `,
  styles: ``
})
export class FooterComponent {

}
