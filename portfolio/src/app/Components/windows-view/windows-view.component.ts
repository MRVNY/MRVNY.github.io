import { Component } from '@angular/core';
import { WindowItemComponent } from "./window-item/window-item.component";
import { QrWindowComponent } from "./qr-window/qr-window.component";


@Component({
  selector: 'app-windows-view',
  standalone: true,
  imports: [WindowItemComponent, QrWindowComponent],
  template: `
    <div class="flex flex-col items-center justify-between w-screen">
      <app-qr-window class=""></app-qr-window>
      <app-window-item class="sm:w-2/3 md:lg:w-1/2 xl:w-1/3"></app-window-item>
    </div>
  `,
  styles: ``
})
export class WindowsViewComponent {
}