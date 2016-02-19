import {Page, Platform, NavController, NavParams, Alert} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'build/pages/view-store/view-store.html',
})

export class ViewStorePage {

    constructor(platform: Platform, nav: NavController, navParams: NavParams) {
        this.platform = platform;
        this.nav = nav;

        this.store = navParams.data.store;
    }

    viewRemoteSite(url) {
        this.platform.ready().then(() => {
            cordova.InAppBrowser.open(url, "_system", "location=true");
        });
    }

    viewLocalPDF(pdf) {
        this.platform.ready().then(() => {
            const pdfLocation = `${cordova.file.applicationDirectory}www/pdf/${pdf}`;

            cordova.plugins.fileOpener2.open(pdfLocation, 'application/pdf', {
                error: function() {
                    const alertFailed = Alert.create({
                        title: 'Failed to open',
                        subTitle: `Unable to open ${pdf}, please try again later or contact app maintainer`,
                        buttons: ['Ok']
                    });

                    this.nav.present(alertFailed);
                },
                success : function(){ }
            });
        });
    }
}
