import { Injectable } from '@angular/core';
import { NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Logger } from './';

@Injectable({ providedIn: 'root' })

export class RouterService {

  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public get loading$(): Observable<boolean> {
    return this._loading$;
  }

  private _routeHistory$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public get routeHistory$(): Observable<string[]> {
    return this._routeHistory$;
  }

  private _currentRoute$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public get currentRoute$(): Observable<string> {
    return this._currentRoute$;
  }

  constructor(private router: Router, private logger: Logger) {
    this.router.events.subscribe(event => {
      let asyncLoadCount = 0;

      if (event instanceof RouteConfigLoadStart) { asyncLoadCount++; }
      if (event instanceof RouteConfigLoadEnd) { asyncLoadCount--; }
      if (event instanceof NavigationEnd) {
        const url: string = event.urlAfterRedirects;
        this.logger.log(`current route: ${url}`);
        this._currentRoute$.next(url);

        if (!this.router.getCurrentNavigation()?.extras?.state?.['back']) {
          const routeHistory: string[] = this._routeHistory$.value;
          routeHistory.push(url);

          this._routeHistory$.next(routeHistory);
        }
      }

      this._loading$.next(!!asyncLoadCount);
    });
  }

  // Navigate to the last route
  public navigateBack(): void {
    this._routeHistory$.pipe(take(1)).subscribe(routeHistory => {
      this.logger.log(routeHistory);
      if (routeHistory.length > 1) {
        const previousRoute: string = routeHistory[routeHistory.length - 2];

        this.router.navigateByUrl(previousRoute, { state: { back: true } }).then(result => {
          if (result) {
            routeHistory.pop();
            this.logger.log(routeHistory);
          }
        });
      }
    })
  }

}
