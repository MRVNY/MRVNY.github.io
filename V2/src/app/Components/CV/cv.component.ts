import { Component } from '@angular/core';
import { QrWindowComponent } from "./qr-window/qr-window.component";
import {HardSkillsComponent} from "@components/CV/hard-skills/hard-skills.component";
import {FloatingWindowComponent} from "@components/floating-window/floating-window.component";
import {EducationComponent} from "@components/CV/education/education.component";
import {SoftSkillsComponent} from "@components/CV/soft-skills/soft-skills.component";
import {ExperienceComponent} from "@components/CV/experience/experience.component";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-windows',
  standalone: true,
  imports: [QrWindowComponent, HardSkillsComponent, FloatingWindowComponent, EducationComponent, SoftSkillsComponent, ExperienceComponent, MatButton],
  template: `
    <div class="flex flex-col items-center justify-between w-screen">
      <app-qr-window class=""></app-qr-window>

      <app-floating-window title="Portfolio" class="w-72">
        <div class="flex justify-center flex-col items-center">
        <a  class="hover:cursor-hand w-full p-2 text-center"
            href="https://qingyuan.games/V1/" mat-button>Go</a>
        </div>
      </app-floating-window>

      <app-floating-window title="Education"
        class="w-fwindow"><app-education/></app-floating-window>

      <app-floating-window title="Experience"
                           class="w-fwindow"><app-experience/></app-floating-window>

      <app-floating-window title="Hard Skills"
        class="w-fwindow"><app-hard-skill/></app-floating-window>

      <app-floating-window title="Soft Skills"
        class="w-fwindow"><app-soft-skills/></app-floating-window>

    </div>
  `,
  styles: ``
})
export class CvComponent {
}
