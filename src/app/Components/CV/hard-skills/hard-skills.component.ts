import { Component } from '@angular/core';
import {FloatingWindowComponent} from "@components/floating-window/floating-window.component";

@Component({
  selector: 'app-hard-skill',
  standalone: true,
  imports: [],
  template: `
    <ul class="list-disc p-2 pl-6 space-x-1 text-justify">
      <div><li>Programming: Python, C, C#, C++, Java, Javascript, LaTEX</li>
      <div class="list-disc pl-4 list-[circle]">
        <li>Game Development: Unity (Experienced): Desktop, Mobile, Web, etc.</li>
        <li>UE5 (Beginner): Desktop, C++, Blueprint</li>
      </div>
      <li>Development: MAUI, ASP.Net, Azure, Firebase, SQL, OOP, UML, HTML, CSS, React, Next.js, Tailwind</li>
      <li>Research: Serious Games, User Tracing/Modeling/Adaptation, HCI, Deep/Reinforcement Learning, Multi-Agent System, Game Theory, Operational Research, Decision</li>
      <li>Languages: Chinese (native), English (fluent), French (fluent), Spanish (limited), Japanese (limited)</li>
      <li>Art: Digital & Analog Photography, Video Montage, Singing, Songwriting, Music Production</li></div>
    </ul>
  `,
})
export class HardSkillsComponent {
}
