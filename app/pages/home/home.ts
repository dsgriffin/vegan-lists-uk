import {Page, Platform, NavController} from 'ionic-framework/ionic';
import {ViewStorePage} from '../view-store/view-store';

@Page({
  templateUrl: 'build/pages/home/home.html',
})

export class HomePage {

  supermarkets: Object[] = [];
  restaurants: Object[] = [];

  constructor(platform: Platform, nav: NavController) {
    this.platform = platform;
    this.nav = nav;
    this.searchQuery = '';
    this.type = 'supermarket'; // default segment to display

    this.allSupermarkets();
    this.allRestaurants();
  }

  allSupermarkets() {
    this.supermarkets = [
      {
        title: "Aldi",
        logo: "aldi.jpg",
        official: {
          localFile: "aldi-150116.pdf",
          localFileUpdated: "15/01/16"
        }
      },
      {
        title: "Asda",
        logo: "asda.png",
        unofficial: {
          remoteSite: "http://theveganwomble.blogspot.co.uk/search/label/Asda"
        }
      },
      {
        title: "Co-op",
        logo: "coop.jpg",
        official: {
          localFile: "cooperative-100314.pdf",
          localFileUpdated: "10/03/14"
        }
      },
      {
        title: "Lidl",
        logo: "lidl.jpg",
        unofficial: {
          remoteSite: "http://theveganwomble.blogspot.co.uk/2014/04/uk-treat-guide-nine-lidl-supermarket.html"
        }
      },
      {
        title: "M&S",
        logo: "marksandspencer.jpg",
        official: {
          localFile: "marksandspencers-031215.pdf",
          localFileUpdated: "03/12/15",
          remoteSite: "http://health.marksandspencer.com/your-diet-needs/vegan-diets"
        }
      },
      {
        title: "Morrisons",
        logo: "morrisons.png",
        unofficial: {
          remoteSite: "http://www.theveganwomble.blogspot.co.uk/2015/04/morrisons-vegan-products.html"
        }
      },
      {
        title: "Sainsburys",
        logo: "sainsburys.jpg",
        official: {
          localFile: "sainsburys-010116.pdf",
          localFileUpdated: "01/01/16",
          remoteSite: "http://www.sainsburys-live-well-for-less.co.uk/recipes-inspiration/healthier-eating/health-advice/product-guidance-lists/"
        }
      },
      {
        title: "Tesco",
        logo: "tesco.jpg",
        official: {
          localFile: "tesco-011215.pdf",
          localFileUpdated: "01/12/15",
          remoteSite: "http://realfood.tesco.com/our-food/vegetarian-and-vegan-diets.html"
        }
      },
      {
        title: "Waitrose",
        logo: "waitrose.png",
        official: {
          localFile: "waitrose-010915.pdf",
          localFileUpdated: "01/09/2015",
          remoteSite: "http://www.waitrose.com/home/inspiration/healthy-eating-andweightloss/special_diets/how_waitrose_can_help.html.html"
        }
      }
    ];
  }

  allRestaurants() {
    this.restaurants = [
      {
        title: "Nandos",
        logo: "nandos.png",
        official: {
          localFile: "nandos-240615.pdf",
          localFileUpdated: "24/06/15"
        }
      },
      {
        title: "Wetherspoons",
        logo: "wetherspoons.jpg",
        official: {
          localFile: "wetherspoons-040216.pdf",
          localFileUpdated: "04/02/16"
        }
      }
    ];
  }

  changeSegment(type) {
    this.searchQuery = '';

    if(type === 'supermarket') {
      this.allSupermarkets();
    }
    else if(type === 'restaurant') {
      this.allRestaurants();
    }
  }

  filterStores(search, type) {
    // set query to the value of the search
    let query = search.value;

    if(type === 'supermarket') {
      this.allSupermarkets(); // get all supermarkets
      // if the value is an empty string then do not filter and return all
      if (query.trim() === '') { return; }
      // filter supermarkets to only display ones with a title that matches the query in some way
      this.supermarkets = this.supermarkets.filter((v) => {
        return v.title.toLowerCase().indexOf(query.toLowerCase()) > -1
      })
    }
    else if (type === 'restaurant') {
      this.allRestaurants(); // get all restaurants
      // if the value is an empty string then do not filter and return all
      if (query.trim() === '') { return; }
      // filter supermarkets to only display ones with a title that matches the query in some way
      this.restaurants = this.restaurants.filter((v) => {
        return v.title.toLowerCase().indexOf(query.toLowerCase()) > -1
      })
    }
  }

  viewStore(store) {
    this.nav.push(ViewStorePage, {
      store: store
    });
  }
}
