import { Component } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [],
  template: `
    <ul class="list-disc p-2 pl-6 text-justify space-x-1">
      <div><li><strong>Creative:</strong> Full of ideas, passionate in many art forms</li>
      <li><strong>Adaptive:</strong> Lived in 3 countries, fast learner</li>
      <li><strong>Collaborative:</strong> Motivated by teammates, already worked with people in 3 time-zones, good a being the mediator</li>
      <li><strong>Open-minded:</strong> Love cultural & sociological exchange</li>
      <li><strong>Empathetic:</strong> Sensitive to other’s experience and emotions</li></div>
    </ul>
  `,
  styles: ``
})
export class SoftSkillsComponent {
  content = `Creative: Full of ideas, passionate in many art forms
Adaptive: Lived in 3 countries, fast learner
Collaborative: Motivated by teammates, already worked with people in 3 time-zones, good a being the mediator
Open-minded: Love cultural & sociological exchange
Empathetic: Sensitive to other’s experience and emotions`
}
