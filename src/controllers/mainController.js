const axios = require('axios');
const cheerio = require('cheerio');

const mainController = {

  home: async (req, res) => {
      res.send('Welcome on my tech news api');
  },

  ai: async (req, res) => {

    const newspapers = [
      {
        name: "technologyreview",
        url: "https://www.technologyreview.com/"
      },
      {
        name: "nytimes",
        url:"https://www.nytimes.com/international/section/technology"
      },
      {
        name: 'wired',
        url: 'https://www.wired.com/category/ideas/'
      }
    ]
    
    let news = [];

    try {

      for (newspaper of newspapers){
        const response = await fetch(newspaper.url)
        const data = await response.text();
        const $ = cheerio.load(data);

        $('a:contains("AI")', data).each(function () {
          const title = $(this).text();
          const url = $(this).attr('href');
          news.push({
            title,
            url: `https://${newspaper.name}.com` + url
          });
        });
      }

    } catch(e) {
      throw new Error(e);
    }

    res.json(news);
  }
};


module.exports = mainController;
