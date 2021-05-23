import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {

  field_data = 
    {
      name: 'Default name',
      nip: '',
      email: 'example@email.com',
      tel: '',
      title: 'Współpraca',
      license: true,
      message: '',
      select_all: false,
      select_rodo: false,
      select_contact: false,
    };
}
