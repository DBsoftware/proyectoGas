import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {AuthZonesService} from '../../services/auth-zones/auth-zones.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  avatar = 'https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg';
  @Input() sideNav: MatSidenav;
  @Input() companyName: string;
  @Input() urlModule: string;
  constructor(public _auth: AuthZonesService) { }

  ngOnInit() {
  }

  toggle() {
    this.sideNav.toggle()
      .then();
  }
  goToProfile() {

  }

}
