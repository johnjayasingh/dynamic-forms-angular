import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = [
    {
      "name": "auxService",
      "action": "/api/v1/ms/create",
      "method": "POST",
      "type": "submit",
      "reqParam": [
        "auxId",
        "projectId",
        "userId",
        "orgId"
      ],
      "formFields": [
        {
          "key": "name",
          "type": "input",
          "templateOptions": {
            "placeholder": "Enter name",
            "label": "Name"
          }
        },
        {
          "key": "version",
          "type": "input",
          "templateOptions": {
            "placeholder": "Enter Version",
            "label": "Version",
            "action": "/api/v1/",
            "method": "get"
          }
        },
        {
          "key": "environment",
          "type": "input",
          "templateOptions": {
            "placeholder": "Choose environment",
            "label": "Environment",
            "action": "/api/v1/",
            "method": "get"
          }
        },
        {
          "key": "target",
          "type": "input",
          "templateOptions": {
            "placeholder": "Target Port",
            "label": "Target port",
            "action": "/api/v1/",
            "method": "get"
          }
        },
        {
          "key": "publish",
          "type": "input",
          "templateOptions": {
            "placeholder": "Enter if required (optional)",
            "label": "Publish port"
          }
        }
      ]
    }
  ];
}
