import {Component, ElementRef, ViewChild} from '@angular/core';
import {CdkDrag, CdkDragHandle, DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule, NgForOf} from '@angular/common';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import {Input} from '@angular/core';
import { WindowService } from '@services/window.service';

@Component({
  selector: 'app-floating',
  standalone: true,
  imports: [
    CdkDrag,
    CdkDragHandle,
    NgForOf
  ],
  template: `
    <div cdkDrag class="border-black relative bg-white self-center border-2 m-5" [@floatingAnimation]="animationState"
        (mousedown)="BringToFront()" #whole>
      <!-- window bar -->
      <div class="flex justify-between items-center w-full py-1 px-2 bg-black" cdkDragHandle #bar>
        <!-- <div class="w-10 aspect-square"></div> -->
         <a href="{{ link }}">
        <h1 class="font-pixel text-4xl text-white self-center">{{ title }}</h1>
        </a>
        <!-- <img
          src="assets/cancel.png" class="w-10 aspect-square cursor-hand active:brightness-90 hover:brightness-75"
            (click)="CloseWindow()"/> -->
      </div>

      <!-- TABLE -->
      <!-- <table class="w-full border-white border-2">
        <ng-content></ng-content>
      </table> -->
    </div>
  `,
  animations: [
    trigger('floatingAnimation', [
      state('middle', style({ top: '0px' })),
      state('middle2', style({ top: '0px' })),
      state('up', style({ top: '-10px' })),
      state('down', style({ top: '10px' })),

      transition('stop => middle', [animate('1s ease-in-out')]),
      transition('middle => up', [animate('1s ease-out')]),
      transition('up => middle2', [animate('1s ease-in')]),
      transition('middle2 => down', [animate('1s ease-out')]),
      transition('down => middle', [animate('1s ease-in')]),
    ]),
  ],
})
export class FloatingWindowComponent {
  @Input() link: string = '';
  @Input() title: string = '';
  @ViewChild('whole') whole!: ElementRef;
  @ViewChild('bar') bar!: ElementRef;

  animationState: string = '';

  constructor(private windowService: WindowService) {
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
    }, Math.random() * 2000);
  }

  BringToFront() {
    //bring window to front of another window
    //set z-index to max
    const z = this.windowService.getLayerCount();
    // console.log(z);
    this.whole.nativeElement.style.zIndex = z;
    // console.log(this.whole.nativeElement.style.zIndex);
  }

  CloseWindow() {
    //close window
    //get parent
    this.whole.nativeElement.parentNode.removeChild(this.whole.nativeElement);

  }
}
