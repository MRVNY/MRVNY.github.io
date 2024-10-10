import { Component, OnInit } from '@angular/core';
import { QrWindowComponent } from "./qr-window/qr-window.component";
import {HardSkillsComponent} from "@components/CV/hard-skills/hard-skills.component";
import {FloatingWindowComponent} from "@components/floating-window/floating-window.component";
import {EducationComponent} from "@components/CV/education/education.component";
import {SoftSkillsComponent} from "@components/CV/soft-skills/soft-skills.component";
import {ExperienceComponent} from "@components/CV/experience/experience.component";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [QrWindowComponent, HardSkillsComponent, FloatingWindowComponent, EducationComponent, SoftSkillsComponent, ExperienceComponent, MatButton],
  template: `
    <div class="flex flex-col justify-between items-center w-2/3">
      <app-qr-window class="self-center"></app-qr-window>

      <app-floating-window title="CV" class="w-96 self-center">
      <div class="flex justify-center flex-col items-center">
      <a  class="hover:cursor-hand w-full p-2 text-center"
          href="assets/pdfs/CV_Sep_2024_FR_EN.pdf" mat-button>Download</a>
        </div>
      </app-floating-window>

      <!-- OFFSET -->
      <app-floating-window title="Education"
        class="w-fwindow -mb-20 -ml-20"><app-education/></app-floating-window>

      <app-floating-window title="Experience"
        class="w-fwindow -mb-20 -mr-20"><app-experience/></app-floating-window>

      <app-floating-window title="Hard Skills"
        class="w-fwindow -mb-20 -ml-20"><app-hard-skill/></app-floating-window>

      <app-floating-window title="Soft Skills"
        class="w-fwindow -mr-20"><app-soft-skills/></app-floating-window>

      <app-floating-window title="Old Portfolio" class="w-96 self-center">
        <div class="flex justify-center flex-col items-center">
        <a  class="hover:cursor-hand w-full p-2 text-center"
            href="assets/V1/index.html" mat-button>Go</a>
        </div>
      </app-floating-window>

    </div>
  `,
  styles: ``
})
export class CvComponent implements OnInit {
  mb: number = 20;
  mx: number = 20;

  constructor() {
    // this.mb = (window.innerWidth > 768) ? 20 : 10;
    // this.mx = (window.innerWidth > 768) ? 20 : 10;
  }

  ngOnInit() {
    this.mb = (window.innerWidth > 768) ? 20 : 10;
    this.mx = (window.innerWidth > 768) ? 20 : 10;
  }
}
