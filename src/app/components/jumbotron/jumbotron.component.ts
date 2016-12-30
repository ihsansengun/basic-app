import { Component } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
})
export class JumbotronComponent  {

  private jbtHeading : string;
  private jbtText : string;
  private jbtBtnText : string;
  private jbtBtnUrl : string;

  constructor() {

    this.jbtHeading = "Hello World";
    this.jbtText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis, nisl eu ornare malesuada, massa arcu egestas tellus, ut condimentum nulla nulla nec tortor. ";
    this.jbtBtnText = "Read More";
    this.jbtBtnUrl = "/about"
  }


}
