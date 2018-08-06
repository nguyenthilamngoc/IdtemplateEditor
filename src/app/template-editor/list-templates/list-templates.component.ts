import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-list-templates',
  templateUrl: './list-templates.component.html',
  styleUrls: ['./list-templates.component.css']
})
export class ListTemplatesComponent {
identity_templates: Section[] = [
    {
      name: 'Standard identity template',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Evidian template',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Fastconnect template',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
}

}
