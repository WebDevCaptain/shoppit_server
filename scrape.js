const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  url: 'https://canopy.co/shop/gifts',
  transform: function(body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(data => {
    data('.CollectionGrid-tileName').each((i, el) => {
      const title = cheerio
        .load(el)
        .text()
        .trim();

      console.log(title);
    });
  })
  .catch(err => console.log('ERROR', err));
