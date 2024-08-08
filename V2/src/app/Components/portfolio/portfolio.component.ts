import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonService } from '@services/json.service';
import { FloatingWindowComponent } from "../floating-window/floating-window.component";
import { SafeUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FloatingWindowComponent, YouTubePlayerModule],
  template: `
    <div cdkDrag class="border-black relative bg-white self-center border-2 m-5"
         #whole>
      <div class="flex justify-center items-center w-full h-10 p-1 bg-black" cdkDragHandle #bar>
        <!-- <div class="h-full aspect-square"></div> -->
        <h1 class="font-pixel text-4xl text-white self-center">↓New Portfolio↓</h1>
        <!-- <img
          src="assets/cancel.png" class="h-full aspect-square cursor-hand active:brightness-90 hover:brightness-75"
            /> -->
      </div>

      <!-- <div>Filter</div> -->
    </div>

      <!-- TABLE -->
      <!-- <table class="w-full border-white border-2"> -->
        <!-- <ng-content></ng-content> -->
        <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
         <app-floating-window *ngFor="let project of projects" title="" #window>
          <div class="flex flex-col text-justify">
            <td class="text-4xl border-2 font-bold border-white text-center bg-black text-white">{{ project.title }}</td>
            <td class="text-xl border-2 font-bold border-white">{{ project.text1 }}</td>
            <td class="border-2 border-white" [innerHTML]="project.text2"></td>

            <img src="assets/portfolio/{{ project.image }}" *ngIf="project.image!==undefined" />
            <img src="assets/portfolio/{{ project.image1 }}" *ngIf="project.image1!==undefined" />
            <img src="assets/portfolio/{{ project.image2 }}" *ngIf="project.image2!==undefined" />

            <!-- youtube iframe -->
             <div class="w-full self-center flex justify-center items-center" *ngIf="project.youtube!==undefined">
            <youtube-player *ngIf="project.youtube!==undefined" [videoId]="project.youtube" [width]="videoWidth"/>
             </div>
            <!-- <iframe *ngIf="project.youtube!==undefined" [src]="this._sanitizer.bypassSecurityTrustResourceUrl(project.youtube)" 
            frameborder="0" class="w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->

            <!-- website -->
             <!-- <iframe *ngIf="project.website !== undefined" [src]="this._sanitizer.bypassSecurityTrustResourceUrl(project.website)" frameborder="0" class="w-full h-64 bg-black"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> -->
      <!-- </iframe> -->
            
          </div>
         </app-floating-window>
        </div>
      <!-- </table>
    </div> -->
  `,
  styles: ``
})
export class PortfolioComponent implements OnInit{
  @ViewChild('window') floating!: FloatingWindowComponent;
  projects: any;
  videoWidth: number = 400;
  constructor(private jsonService: JsonService, public _sanitizer: DomSanitizer) {
    
  }

  ngOnInit(): void {
    this.projects = this.jsonService.projects;
    // for (let project of this.projects) {
    //   if (project.youtube !== undefined) {
    //     // project.youtube = this._sanitizer.bypassSecurityTrustResourceUrl(project.youtube);
    //     //get video id from youtube url
    //     project.youtube = project.youtube.split('v=')[1];
    //     console.log(project.youtube);
    //   }
    // }
    // sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2
    this.videoWidth = this.floating.whole.nativeElement.clientWidth;
  }
}
