import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { trigger, state, style, animate, transition, } from '@angular/animations';

@Component({
  selector: 'app-qr-window',
  standalone: true,
  imports: [DragDropModule],
  template: `
    <!-- QR Code -->
      <div class="flex relative justify-center items-center w-44 h-44 overflow-hidden border-black border-4 rounded-md" 
      [@floatingAnimation]="animationState" cdkDrag >
      <!-- (mouseenter)="animationState='stop'" (mouseleave)="animationState='middle'" #QRbox> -->
        <img src={{qrCode}} alt="QR code" class="w-60 h-60 object-cover scale bg-white "/>
      </div>
  `,
  animations: [
    trigger('floatingAnimation', [
      state('middle', style({top: '0px'})),
      state('middle2', style({top: '0px'})),
      state('up', style({top: '-10px'})),
      state('down', style({top: '10px'})),

      transition('stop => middle',[animate('1s ease-in-out')]),
      transition('middle => up',[animate('1s ease-out')]),
      transition('up => middle2',[animate('1s ease-in')]),
      transition('middle2 => down',[animate('1s ease-out')]),
      transition('down => middle',[animate('1s ease-in')]),
    ]),
  ],
})

export class QrWindowComponent {
  @Input() qrCode: string = 'assets/QR.png';
  animationState: string = '';

  constructor() {
    // Start the animation
    this.startAnimation();
  }

  startAnimation() {
    setTimeout(() => {
      this.animationState = 'middle';

      setInterval(() => {
        if (this.animationState === 'middle') {
          this.animationState = 'up';
        } else if (this.animationState === 'up') {
          this.animationState = 'middle2';
        }
        else if (this.animationState === 'middle2') {
          this.animationState = 'down';
        }
        else if (this.animationState === 'down') {
          this.animationState = 'middle';
        }
      }, 1000);
    }, Math.random() * 0);
  }
}