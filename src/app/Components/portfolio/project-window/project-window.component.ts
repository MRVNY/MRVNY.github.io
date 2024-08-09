import { Component } from '@angular/core';
import { JsonService } from '@services/json.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  template: `
    <!-- <div * -->
  `,
  styles: ``
})
export class ProjectComponent {
  projects: any = this.jsonService.projects;
  constructor(private jsonService: JsonService) { }
}
