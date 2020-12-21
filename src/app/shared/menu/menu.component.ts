import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {MenuService} from '../../services/menu/menu.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter, takeUntil, tap} from 'rxjs/operators';
import {AppConfig} from '../../config/app-config';
import {MenuRoute} from '../../interfaces/menu-route';
import {LocalStorageService} from '../../services/localstorage/local-storage.service';
import {RoutingPathClientes} from '../../zones/clientes/routing-path-clientes';
import {MatSidenav} from '@angular/material';
import {AuthZonesService} from '../../services/auth-zones/auth-zones.service';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnChanges, OnDestroy {
  @Input() sideNav: MatSidenav;
  @Input() inicioRoute: string;
  @Input() zoneId: number;
  noLoggedRoutes$: Observable<any>;
  loggedInRoutes$: Observable<any>;
  logo = AppConfig.APP_LOGO;
  userLogged;
  destroy$: Subject<boolean> = new Subject<boolean>();
  public initReouteItem: MenuRoute = {
    alias: 'Inicio',
    path:  `./${ this.inicioRoute }`,
    icon: 'home',
    isExternal: false
  };
  constructor(private _menu: MenuService,
              public _auth: AuthZonesService,
              private _localStorage: LocalStorageService,
              private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges) {



  }
  async ngOnInit() {
    this.initReouteItem.path = this.inicioRoute;
     const logged = await this._localStorage.getItem(AppConfig.x);
    this.userLogged = !(logged);
    this.noLoggedRoutes$ = this._menu.getExposedMenu(this.zoneId);
    if (!this.userLogged)  {
      this.loggedInRoutes$ = this._menu.getUserMenu(this.zoneId);
    }
    // this.noLoggedRoutes.unshift(this.initReouteItem);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(event => {
        this.sideNav.close();
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy() {
    this.loggedInRoutes$ = undefined;
  }
}
