import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {

  field_data = 
    {
      name: 'np.Apple',
      nip: 'np.123-45-67-890',
      email: 'example@email.com',
      tel: 'np.123-456-789',
      title: 'Współpraca',
      license: true,
      message: '',
      select_all: false,
      select_rodo: false,
      select_contact: false,
    };
  
  checkedAll() {
    this.field_data.select_rodo = true;
    this.field_data.select_contact = true;
  };
  sendData(formRef) {
    console.log(formRef.value); 
  }
};
