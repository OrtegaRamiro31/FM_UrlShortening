import { Component } from '@angular/core';
import {statisticCard} from "../../interfaces/statistic";

@Component({
  selector: 'home-statistic',
  templateUrl: './statistic.component.html',
  styles: [
  ]
})
export class StatisticComponent {
  public statistics: statisticCard[] = [
    {
      image: 'assets/img/icon-brand-recognition.svg',
      title: 'Brand Recognition',
      description: 'Boost your brand recognition with ' +
        'each click. Generic links don’t mean a ' +
        'thing. Branded links help instil ' +
        'confidence in your content.',
    },
    {
      image: 'assets/img/icon-detailed-records.svg',
      title: 'Detailed Records',
      description: 'Gain insights into who is clicking your ' +
        'links. Knowing when and where people engage with your ' +
        'content helps inform better decisions.',
    },
    {
      image: 'assets/img/icon-fully-customizable.svg',
      title: 'Fully Customizable',
      description: 'Improve brand awareness and content discoverability ' +
        'through customizable links, supercharging audience engagement. ',
    },
  ];
}
