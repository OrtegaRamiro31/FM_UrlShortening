import {Component, Input} from '@angular/core';
import {ShortlinkInterface} from "../../interfaces/shortlink.interface";

@Component({
  selector: 'home-cardlink',
  templateUrl: './cardlink.component.html',
  styles: [
  ]
})
export class CardlinkComponent {

  @Input()
  shortestLink: ShortlinkInterface = {} as ShortlinkInterface;

}
