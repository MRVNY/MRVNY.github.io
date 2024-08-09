import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
    <table class="w-full border-white border-2 text-justify">
      <tr *ngFor="let item of experience">
        <td class="black-dot-2">
          <h1 class="text-2xl font-pixel">{{item.title}}</h1>
          <p class="font-avenir">{{item.company}}</p>
          <div class="flex space-x-1 font-pixel">
            <p *ngFor="let tag of item.tags"
              class="bg-black text-white px-1 animate-pulse">
              {{tag}}</p>
          </div>
          <p class="font-avenir -space-y-1">{{item.description}}</p>
        </td>
        <!-- <td class="black-dot-2">Artificial Intelligence</td> -->
      </tr>
    </table>
  `,
  styles: ``
})
export class ExperienceComponent {
  experience = [
    {
      "year": "Ongoing",
      "title": "Freelance App Developer",
      "description": "Development of an app that fights sexism with comebacks.",
      "company": "Arborus",
      "tags": ["#C#", "#MAUI", "#iOS", "#Android"],
    },
    {
      "year": "2023\n Mar. - Aug.",
      "title": "Deep Generative AI Internship",
      "description": "Creation of a new dataset of audio-text-motion using existing models for 3D pose estimation, and implementation of a Transformer VAE baseline model for proofing validity.",
      "company": "Tokyo National Institute of Informatics",
      "tags": ["#Python", "#PyTorch", "#DeepLearning"],
    },
    {
      "year": "2022\n Jun. - Jul.",
      "title": "Serious Game Development Internship",
      "description": "Solo developer of on the prototype targeted for PC and Android, developed by previous team of students. Significantly improved stability and optimization by using Coroutine, async for asynchronous execution, as well as  basic Jobs System and DOTS for multi-threading. Added a visual novel interface with loadable conversation tree and a custom 2D A* pathfinding system.",
      "company": "LIP6, Sorbonne University",
      "tags": ["#Unity", "#C#", "#SeriousGame"],
    }];
}
