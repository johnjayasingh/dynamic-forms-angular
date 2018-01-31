import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = [
    {
      label: 'Form 1',
      class: 'form-main',
      formInputs: [
        {
          name: 'name',
          label: 'Input 1',
          value: 'My Name',
          type: 'input-text'
        },
        {
          name: 'email',
          label: 'Input 1',
          value: 'Some Mail',
          type: 'input-email'
        }, {
          name: 'location',
          label: 'Select 1',
          value: 'option1',
          options: [
            { label: 'Option 1', value: 'option1' }
          ],
          type: 'input-select'
        }
      ],
      submit: 'forward',
      back: 'back'
    },
    {
      label: 'Form 2',
      class: 'form-main',
      formInputs: [
        {
          name: 'name',
          label: 'Input 1',
          value: 'My Name',
          type: 'input-text'
        },
        {
          name: 'email',
          label: 'Input 1',
          value: 'Some Mail',
          type: 'input-email'
        }, {
          name: 'name',
          label: 'Input 1',
          value: 'My Name',
          type: 'input-text'
        },
        {
          name: 'email',
          label: 'Input 1',
          value: 'Some Mail',
          type: 'input-email'
        }, {
          name: 'name',
          label: 'Input 1',
          value: 'My Name',
          type: 'input-text'
        },
        {
          name: 'email',
          label: 'Input 1',
          value: 'Some Mail',
          type: 'input-email'
        }, {
          name: 'name',
          label: 'Input 1',
          value: 'My Name',
          type: 'input-text'
        },
        {
          name: 'email',
          label: 'Input 1',
          value: 'Some Mail',
          type: 'input-email'
        }, {
          name: 'name',
          label: 'Input 1',
          value: 'My Name',
          type: 'input-text'
        },
        {
          name: 'email',
          label: 'Input 1',
          value: 'Some Mail',
          type: 'input-email'
        }, {
          name: 'location',
          label: 'Select 1',
          value: 'option1',
          options: [
            { label: 'Option 1', value: 'option1' }
          ],
          type: 'input-select'
        }, {
          name: 'location',
          label: 'Select 1',
          value: 'option1',
          options: [
            { label: 'Option 1', value: 'option1' }
          ],
          type: 'input-select'
        }, {
          name: 'location',
          label: 'Select 1',
          value: 'option1',
          options: [
            { label: 'Option 1', value: 'option1' }
          ],
          type: 'input-select'
        }, {
          name: 'location',
          label: 'Select 1',
          value: 'option1',
          options: [
            { label: 'Option 1', value: 'option1' }
          ],
          type: 'input-select'
        }, {
          name: 'location',
          label: 'Select 1',
          value: 'option1',
          options: [
            { label: 'Option 1', value: 'option1' }
          ],
          type: 'input-select'
        }, {
          name: 'location',
          label: 'Select 1',
          value: 'option1',
          options: [
            { label: 'Option 1', value: 'option1' }
          ],
          type: 'input-select'
        }
      ],
      submit: 'forward',
      back: 'back'
    }
  ];
}
