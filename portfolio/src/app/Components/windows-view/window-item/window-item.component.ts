import {Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition, } from '@angular/animations';


@Component({
  selector: 'app-window-item',
  standalone: true,
  imports: [DragDropModule, CommonModule],
  template: `
    <div cdkDrag class="border-black relative bg-white self-center border-2 m-5" [@floatingAnimation]="animationState">
      <!-- window bar -->
      <div class="flex justify-between items-center w-full h-10 p-1 bg-black" cdkDragHandle>
        <div class="h-full aspect-square"></div>
        <h1 class="font-pixel text-4xl text-white self-center">Education</h1>
        <img 
        src="assets/cancel.png" class="h-full aspect-square cursor-hand active:brightness-90 hover:brightness-75"/>
      </div>

      <!-- TABLE -->
      <table class="w-full border-white border-2">
        <tr *ngFor="let item of education">
          <td class="black-dot-2">{{item.year}}</td>
          <td class="black-dot-2 -space-y-1">
            <h1 class="text-2xl font-pixel">{{item.title}}</h1>
            <p class="font-avenir italic text-gray-500 text-sm">{{item.description}}</p>
            <p class="font-avenir italic font-bold">{{item.grade}}</p>
            <p class="font-avenir">{{item.location}}</p>
          </td>
          <!-- <td class="black-dot-2">Artificial Intelligence</td> -->
        </tr>
      </table>
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
export class WindowItemComponent {
  education = [
    {
      "year": "2024",
      "title": "POEC Training for .Net Developer",
      "location": "Global Knowledge Network"
    },
    {
      "year": "2021-2023",
      "title": "Master of Artificial Intelligence",
      "description": "Parcours AgeNts Distribués, Robotique, Recherche Opérationnelle, Interaction, DEcision (ANDROIDE)",
      "grade": "Mention Bien",
      "location": "Sorbonne University"
    },
    {
      "year": "2018-2021",
      "title": "Bachelor  of Computer Science",
      "grade": "Mention Bien",
      "location": "Sorbonne University"
    }
  ]

  animationState: string = '';

  constructor() {
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
}
