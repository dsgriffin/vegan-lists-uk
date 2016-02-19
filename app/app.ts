import {IonicApp, App, Platform, Config} from 'ionic-framework/ionic';
import {HomePage} from './pages/home/home';
import {AboutPage} from './pages/about/about';

@App({
  template: `
    <ion-menu id="leftMenu" [content]="content">
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <button ion-item *ngFor="#p of pages" (click)="openPage(p)">
            {{p.title}}
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-nav id="nav" [root]="root" #content swipe-back-enabled="false"></ion-nav>
  `,
  // Check out the config API docs for more info
  // http://ionicframework.com/docs/v2/api/config/Config/
  config: {}

})
export class MyApp {
  constructor(app: IonicApp, platform: Platform) {
    this.app = app;
    this.platform = platform;

    this.root = HomePage;

    this.pages = [
      { title: 'Vegan Lists UK', component: HomePage, icon: 'calendar', hide: false },
      { title: 'About App', component: AboutPage, icon: 'log-in', hide: false }
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('leftMenu').close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    // change the root page unless the root is already the current page
    if(nav != page.component) {
      nav.setRoot(page.component);
    }
  }
}
