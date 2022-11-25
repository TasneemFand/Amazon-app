// const withImages = require('next-images');


module.exports = {
  images: {
    domains: [
      'pngimg.com',
      'my--app-b7e18.appspot.com',
      'firebasestorage.googleapis.com'
    ]
  },

  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/dashboards/crypto',
        permanent: true
      }
    ];
  }
};
