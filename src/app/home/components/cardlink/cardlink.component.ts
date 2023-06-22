import {Component, Input} from '@angular/core';
import {ShortlinkInterface} from "../../interfaces/shortlink.interface";
import {IClipboardResponse} from "ngx-clipboard";

@Component({
  selector: 'home-cardlink',
  templateUrl: './cardlink.component.html',
  styles: [
  ]
})
export class CardlinkComponent {

  @Input()
  shortestLink: ShortlinkInterface = {} as ShortlinkInterface;

  public couponText: string = '';
  public isCopied: boolean = false;

  contentCopied($event: IClipboardResponse): void {
    this.isCopied = $event.isSuccess;
  }
}
