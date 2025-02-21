import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { link } from 'fs';
import { title } from 'process';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  listContact: any[] = [
    {
      title: 'ที่ตั้ง',
      pathImg: '../../../assets/img/google-maps.png',
      description:
        '368,370 ซอยเทอดไทย19 แขวงบางยี่เรือ เขตธนบุรี กรุงเทพมหานคร',
    },
    {
      title: 'โทรศัพท์',
      pathImg: '../../../assets/img/phone-call.png',
      description: '061-746-5363',
    },
    {
      title: 'Email',
      pathImg: '../../../assets/img/mail.png',
      description: 'migotoramen2022@gmail.com',
    },
    {
      title: 'Facebook',
      pathImg: '../../../assets/img/facebook.png',
      description: 'www.facebook.com/migotoramen2022',
      url: 'https://www.facebook.com/migotoramen2022',
      link: true,
    },
    {
      title: 'Shopee',
      pathImg: '../../../assets/img/shopee.png',
      description: 'www.shopee.co.th/migoto.2022',
      url: 'https://shopee.co.th/migoto.2022',
      link: true,
    },
    {
      title: 'Line',
      pathImg: '../../../assets/img/line.png',
      description: '@migotoramen',
    },
  ];

  ngOnInit(): void {}

  goto(link: boolean, url: string) {
    if (link) {
      window.open(url);
    }
  }
}
