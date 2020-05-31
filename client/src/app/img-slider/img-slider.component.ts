import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss']
})
export class ImgSliderComponent implements OnInit {
  images = [
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(80).tmb-1024v.png?sfvrsn=afa995ff_1',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(80).tmb-1024v.png?sfvrsn=afa995ff_1',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(79).tmb-1024v.png?sfvrsn=86f79761_1',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(79).tmb-1024v.png?sfvrsn=86f79761_1',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(75).tmb-1024v.png?sfvrsn=a1aa01b1_1',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(75).tmb-1024v.png?sfvrsn=a1aa01b1_1',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/3d5be4101d62b4f6bb891c9d0c65aff78.tmb-1024v.png?sfvrsn=ca950e12_2',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/3d5be4101d62b4f6bb891c9d0c65aff78.tmb-1024v.png?sfvrsn=ca950e12_2',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/7.tmb-1024v.png?sfvrsn=1aab7c90_2',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/7.tmb-1024v.png?sfvrsn=1aab7c90_2',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/24.tmb-1024v.png?sfvrsn=eeb1f366_2',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/24.tmb-1024v.png?sfvrsn=eeb1f366_2',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/28.tmb-1024v.png?sfvrsn=a0bb5119_2',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/28.tmb-1024v.png?sfvrsn=a0bb5119_2',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/26-revised.tmb-1024v.png?sfvrsn=7d5199ac_1',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/26-revised.tmb-1024v.png?sfvrsn=7d5199ac_1',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/eng-mythbusting-ncov-(15).tmb-1024v.png?sfvrsn=a8b9e94_2',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/eng-mythbusting-ncov-(15).tmb-1024v.png?sfvrsn=a8b9e94_2',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mb-sun-exposure.tmb-1024v.png?sfvrsn=658ce588_6',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mb-sun-exposure.tmb-1024v.png?sfvrsn=658ce588_6',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mb-breathing-exercice.tmb-1024v.jpg?sfvrsn=db06f4a9_5',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mb-breathing-exercice.tmb-1024v.jpg?sfvrsn=db06f4a9_5',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/52.tmb-1024v.png?sfvrsn=862374e_6',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/52.tmb-1024v.png?sfvrsn=862374e_6',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mb-cold-snow.tmb-1024v.png?sfvrsn=1e557ba_5',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mb-cold-snow.tmb-1024v.png?sfvrsn=1e557ba_5',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mb-hot-bath.tmb-1024v.png?sfvrsn=f1ebbc_5',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mb-hot-bath.tmb-1024v.png?sfvrsn=f1ebbc_5',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mb-mosquito-bite.tmb-1024v.png?sfvrsn=a1d90f6_5',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mb-mosquito-bite.tmb-1024v.png?sfvrsn=a1d90f6_5',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mythbusters-27.tmb-1024v.png?sfvrsn=d17bc6bb_9',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mythbusters-27.tmb-1024v.png?sfvrsn=d17bc6bb_9',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/mb---uv-light-edited.tmb-1024v.png?sfvrsn=14c7467d_7',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/mb---uv-light-edited.tmb-1024v.png?sfvrsn=14c7467d_7',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/11.tmb-1024v.png?sfvrsn=97f2a51e_10',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/11.tmb-1024v.png?sfvrsn=97f2a51e_10',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/23.tmb-1024v.png?sfvrsn=c65dad38_15',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/23.tmb-1024v.png?sfvrsn=c65dad38_15',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/19.tmb-1024v.png?sfvrsn=52adfc93_15',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/19.tmb-1024v.png?sfvrsn=52adfc93_15',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbuster-2.tmb-1024v.png?sfvrsn=635d24e5_15',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbuster-2.tmb-1024v.png?sfvrsn=635d24e5_15',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbuster-3.tmb-1024v.png?sfvrsn=10657e42_15',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/mythbuster-3.tmb-1024v.png?sfvrsn=10657e42_15',
  },
  {
    thumbImage: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mythbuster-4.tmb-1024v.png?sfvrsn=e163bada_15',
    image: 'https://who.int/images/default-source/health-topics/coronavirus/myth-busters/web-mythbusters/mythbuster-4.tmb-1024v.png?sfvrsn=e163bada_15',
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
