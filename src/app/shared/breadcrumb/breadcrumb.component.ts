import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() sideNav: MatSidenav;


  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
      ).subscribe(async event => {

      if (this.sideNav.opened) {
        try {
          const menu = await this.sideNav.close();
          return  menu;
        } catch (error) {
          console.log('err to try close sideNav ', error);
        }
      }

      this.routerBreadcrumb();

    });

  }
  /** Makes a request to retrieve breadcrumb */
  private routerBreadcrumb(): void {

   /* this.loadingSpinner.toggleLoadingRouter(true);
    this.migaDePan = this.breadcrumb.getBreadcrumb(this.router.url)
      .pipe(
        map((response: HttpResponse<GeneralResponse>) => {
          switch (response.status) {
            case 400:
              return  response;
            case 200:
              return response.body.data;
          }
        }),
        tap(() => this.loadingSpinner.toggleLoadingRouter(false)),
        catchError(err => {
          this.loadingSpinner.toggleLoadingRouter(false);
          this.notify.notify('No es posible  recuperar el breadcrumb, inténtalo de nuevo mas tarde', 'Ok');
          return observableOf(
            [
              {
                error: 'Algo salio mal al tratar de recuperar el router',
                err
              }
            ]
          );
        })
      );*/

  }


}
