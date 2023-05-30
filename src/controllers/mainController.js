const axios = require('axios');
const cheerio = require('cheerio');

const mainController = {

  ai: async (req, res) => {
    const subject = req.params.subject;

    const newspapers = [
      {
        name: "technologyreview",
        url: "https://www.technologyreview.com/",
        base: ''
      },
      {
        name: "nytimes",
        url:"https://www.nytimes.com/international/section/technology",
        base: 'https://www.nytimes.com/international/section/technology'
      },
      {
        name: 'theguardian',
        url: 'https://www.theguardian.com/uk/technology',
        base: 'https://www.theguardian.com/'
      },
      {
        name: 'hackernews',
        url: 'https://news.ycombinator.com/',
        base: ''
      }
    ]
    
    let news = [];

    try {

      for (newspaper of newspapers){
        const response = await fetch(newspaper.url)
        const data = await response.text();
        const $ = cheerio.load(data);

        $(`a:contains("${subject}")`, data).each(function () {
          const title = $(this).text();
          const url = $(this).attr('href');

          news.push({
            title,
            url: newspaper.base + url
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
