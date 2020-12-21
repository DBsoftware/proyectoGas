import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NavigationEnd, Router} from '@angular/router';
import { Subject } from 'rxjs';
import {MenuService} from '../../../../services/menu/menu.service';
import {LocalStorageService} from '../../../../services/localstorage/local-storage.service';
import {AuthZonesService} from '../../../../services/auth-zones/auth-zones.service';
import {RoutingPath} from '../../../../routing-path';
import {ClientesConfig} from '../../config/clientes-config';

@Component({
  selector: 'app-no-logged-clientes',
  templateUrl: './no-logged-clientes.component.html',
  styleUrls: ['./no-logged-clientes.component.scss'],
  animations: [
    trigger('NavExpansion', [
      state('collapsed', style({height: '0px', display: 'none'})),
      state('expanded', style({height: '*', display: 'block'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
})
export class NoLoggedClientesComponent implements OnInit, OnDestroy {
  zoneId = `${ ClientesConfig.ZONE_ID }`;
  routeInit = `/${ RoutingPath.APP_ROUTING.pages.clientes.path }`;
  sidenavOptions = {
    mode: 'over',
    fixed: 'fixed'
  };

  userLogged = false;

  constructor(
    private router: Router,
    private menuService: MenuService,
    @Inject(LocalStorageService) private _localStorage: LocalStorageService,
    public _auth: AuthZonesService
  ) {
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {

  }

  ngOnDestroy() {
    this.userLogged = false;
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
