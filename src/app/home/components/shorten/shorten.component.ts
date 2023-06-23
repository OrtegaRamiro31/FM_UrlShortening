import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ShorterLinksService} from "../../services/shorter-links.service";
import {ShortlinkInterface} from "../../interfaces/shortlink.interface";
import {catchError, Subscription, throwError} from "rxjs";

@Component({
  selector: 'home-shorten',
  templateUrl: './shorten.component.html',
  styles: [
  ]
})
export class ShortenComponent {
  public myForm: FormGroup = this.formBuilder.group({
    link: ['', [Validators.required]],
  });

  public shortestLink: ShortlinkInterface = {
    ok: false,
    result: {
      code: '',
      short_link: '',
      full_short_link: '',
      short_link2: '',
      full_short_link2: '',
      short_link3: '',
      full_short_link3: '',
      share_link: '',
      full_share_link: '',
      original_link: ''
    }
  };
  public shortLinksList: ShortlinkInterface[] = [];

  public linkValue: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private shorterLinksService: ShorterLinksService,
  ) { }

  isInvalidField( field: string ): boolean {
    return !!this.myForm.controls[field].errors;
  }

  generateShortLink(): void {

    this.linkValue = this.myForm.value.link;
    const subscription: Subscription = this.shorterLinksService.getShorterLink(this.linkValue)
      .pipe(
        catchError( (error) => {
          console.log('Error ocurrido', error);
          return throwError(error);
        })
      )
      .subscribe(
      shortLink => {
        console.log('suscriot')
        this.shortLinksList = [...this.shortLinksList, shortLink];
        subscription.unsubscribe();
      }
    )
  }
}
