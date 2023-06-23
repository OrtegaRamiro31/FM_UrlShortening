import { Component } from '@angular/core';
import {LinksFooter} from "../../interfaces/linksFooter.interface";

@Component({
  selector: 'home-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {
  public iconSocialNetworks: string[] = [
    'facebook',
    'twitter',
    'pinterest',
    'instagram'
  ];
  public links: LinksFooter[] = [
    {
      title: 'Features',
      links: [
        {linkName: 'Link Shortening', href: '#' },
        {linkName: 'Branded Links', href: '#' },
        {linkName: 'Analytics', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        {linkName: 'Blog', href: '#' },
        {linkName: 'Developers', href: '#' },
        {linkName: 'Support', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        {linkName: 'About', href: '#' },
        {linkName: 'Our Team', href: '#' },
        {linkName: 'Careers', href: '#' },
        {linkName: 'Contact', href: '#' },
      ],
    },
  ]
}
