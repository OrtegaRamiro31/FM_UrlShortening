import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ShorterLinksService} from "../../services/shorter-links.service";

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

  // public shortestLink: string;

  constructor(
    private formBuilder: FormBuilder,
    private shorterLinksService: ShorterLinksService,
  ) { }


  generateShortLink(): void {
    const link = this.myForm.value.link;
    this.shorterLinksService.getShorterLink(link).subscribe(
      shortLink => {console.log(shortLink)}
    )
  }
}
