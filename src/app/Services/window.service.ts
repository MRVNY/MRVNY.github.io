import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  layerCount = 0;

  constructor() { }

  getLayerCount() {
    this.layerCount++;
    return this.layerCount;
  }
}
