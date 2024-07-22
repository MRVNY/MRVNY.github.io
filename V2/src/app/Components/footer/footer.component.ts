import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <nav class="font-extralight relative w-full bg-black text-white z-50 -bottom-10" #noScrollDiv>
      <div class="flex justify-center pt-10 -bottom-10">
      Qingyuan YAO © 2024
      </div>
    </nav>
  `,
  styles: ``
})
export class FooterComponent{
  @ViewChild('noScrollDiv') noScrollDiv!: ElementRef;

}
