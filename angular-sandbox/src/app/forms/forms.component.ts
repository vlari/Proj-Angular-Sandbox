import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  formTypes: any = []; 

  constructor() { }

  ngOnInit() {
    this.formTypes = [
      {
        type: 'Template Driven',
        description: 'Template-driven forms are useful for adding a simple form to an app, such as an email list signup form. They\'re easy to add to an app, but they don\'t scale as well as reactive forms. If you have very basic form requirements and logic that can be managed solely in the template, use template-driven forms.',
        formRouteLink: '/navigation/forms/template'
  
      },
      {
        type: 'Reactive(Model Driven)',
        description: 'Reactive forms are more robust: they\'re more scalable, reusable, and testable. If forms are a key part of your application, or you\'re already using reactive patterns for building your application, use reactive forms.',
        formRouteLink: '/navigation/forms/reactive'
      }
    ]
  }

}
