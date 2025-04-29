import { Component, OnInit } from '@angular/core';
import { QrWindowComponent } from "../Components/CV/qr-window/qr-window.component";
import { FloatingWindowComponent } from "../Components/floating/floating.component";
import { FooterComponent } from "../Components/footer/footer.component";

@Component({
  selector: 'app-otw',
  standalone: true,
  imports: [QrWindowComponent, FloatingWindowComponent, FooterComponent],
  template: `

  <!-- BACKGROUD -->
  <!-- <img src="assets/OTW_inv.jpeg" alt="Background" class="absolute w-full h-full object-cover -z-5"/>


  <div class="min-h-screen relative flex flex-col select-none cursor-pixel font-avenir space-y-6">

  <nav class="z-50 flex justify-center w-full">
      <div class="bg-black text-white text-6xl font-pixel flex flex-col items-center p-4 pb-0 text-center">
        <a class="text-4xl"
        routerLink="/home">Outside These Walls</a>
        <a class="text-2xl"
        routerLink="/home">Album by Qingyuan</a>
      </div>
  </nav>

  <app-qr-window class="self-center" qrCode="assets/OTW.jpg"></app-qr-window>

  <app-floating title="Spotify" link="https://open.spotify.com/album/3cE3lVIJmChsVLNzsuSt1D?si=i1brjgZZRNiuaGWnxVFxIg" class="self-center"/>
  <app-floating title="YouTube" link="https://youtube.com/playlist?list=OLAK5uy_mJZTjb467X28Ve6aXy0HbvC-wBfP09_rw&si=T8MX-K_aW3mEYs66" class="self-center"/>
  <app-floating title="NetEase" link="http://163cn.tv/D92QDfb" class="self-center"/> -->

      
  <!-- <app-footer/> -->
    <!-- </div> -->
  
    <!-- Loading indicator while redirecting -->
    <div class="min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-3xl mb-4">Redirecting to Outside These Walls...</h1>
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
    </div>
  `,
  styles: ``
})
export class OtwComponent implements OnInit {

  ngOnInit(): void {
    //change titles in header

    // const header = document.querySelector('app-header') as any;
    // if (header) {
    //   header.setTitles("Outside These Walls", "Qingyuan");
    // }

    // go to https://mrvny.github.io/otw/#/
    window.location.href = 'https://mrvny.github.io/otw/';
  }
}
