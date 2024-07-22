import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    NgForOf
  ],
  template: `
    <table class="w-full border-white border-2 text-justify">
      <tr *ngFor="let item of education">
        <td class="black-dot-2">{{item.year}}</td>
        <td class="black-dot-2 -space-y-1">
          <h1 class="text-2xl font-pixel">{{item.title}}</h1>
          <p class="font-avenir italic text-gray-500 text-sm">{{item.description}}</p>
          <p class="font-avenir italic font-bold">{{item.grade}}</p>
          <p class="font-avenir">{{item.location}}</p>
        </td>
        <!-- <td class="black-dot-2">Artificial Intelligence</td> -->
      </tr>
    </table>
  `,
  styles: ``
})
export class EducationComponent {
  education = [
    {
      "year": "2024",
      "title": "POEC Training for .Net Developer",
      "location": "Global Knowledge Network"
    },
    {
      "year": "2021-2023",
      "title": "Master of Artificial Intelligence",
      "description": "Parcours AgeNts Distribués, Robotique, Recherche Opérationnelle, Interaction, DEcision (ANDROIDE)",
      "grade": "Mention Bien",
      "location": "Sorbonne University"
    },
    {
      "year": "2018-2021",
      "title": "Bachelor  of Computer Science",
      "grade": "Mention Bien",
      "location": "Sorbonne University"
    }
  ]
}
