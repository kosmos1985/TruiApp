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
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  nipPattern = "^[0-9]{9}$";
  
  
  checkedAll() {
    this.field_data.select_rodo = true;
    this.field_data.select_contact = true;
  };
  sendData(formRef) {
    alert('Dziękujemy za poprawne wypełnienie formularza');
    console.log(formRef.value); 
  }
};
