import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  items:any[] | undefined;

  ngOnInit() {
    this.items = [
        { label: 'หน้าแรก'},
        { label: 'สิ้นค้าของเรา'},
        { label: 'วิธีสั่งซื้อ'},
        { label: 'ติดต่อเรา' }
    ]
}

}
