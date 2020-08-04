export const theme = {
  settings: {
    initialMapCenter: {
      lat: 37.2089004,
      lng: -93.2912543
    },
    initialMapZoom: 13
  },
  socialMedia: [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/sgfdevs/sgf-covid-support'
    }
  ],

  data: {
    spreadsheetUrl: 'https://spreadsheets.google.com/feeds/list/1NSblFVpBI3pwZYtq7LIArEFg0mm3OIaR6hY_s0q9K7I/1/public/values?alt=json'
  },
  maps: {
    normal: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://carto.com/">Carto</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    },
    dark: {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="https://carto.com/">Carto</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }
  }
}
