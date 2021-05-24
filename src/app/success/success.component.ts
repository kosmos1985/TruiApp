import { Location } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent{

  constructor(private location: Location) { }

  goToForm() {
    this.location.back();
  };

}
