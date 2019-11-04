import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core/testing';
import { environment } from '../environments/environment';

type Gtag = typeof gtag;
type WindowWithGtag = Window & { gtag: Gtag };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-libraries';

  private windowWithGtag!: WindowWithGtag;
  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.windowWithGtag = window as WindowWithGtag;
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.windowWithGtag.gtag('config', environment.gaTrackingId, {
          page_path: event.urlAfterRedirects
        });
      }
    });
    const s1 = this.renderer.createElement('script');
    s1.type = 'text/javascript';
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${environment.gaTrackingId}`;
    this.renderer.appendChild(this.document.head, s1);

    const s2 = this.renderer.createElement('script');
    s2.type = 'text/javascript';
    s2.text = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config', '${environment.gaTrackingId}');`;
    this.renderer.appendChild(this.document.head, s2);
  }
}
