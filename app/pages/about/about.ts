import {Page, Platform, NavController} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/about/about.html',
})

export class AboutPage {
  constructor(platform: Platform, nav: NavController) {
    this.platform = platform;
    this.nav = nav;

    this.platform.ready().then(() => {
      cordova.getAppVersion.getVersionNumber().then(function (version) {
        document.getElementById('version').textContent = version;
      });
    });
  };

  viewRemoteSite(url) {
    this.platform.ready().then(() => {
      cordova.InAppBrowser.open(url, "_system", "location=true");
    });
  }
}
