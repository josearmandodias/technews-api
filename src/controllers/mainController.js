const axios = require('axios');
const cheerio = require('cheerio');

const mainController = {

  home: async (req, res) => {
      //const config = {
      //  method: 'GET',
      //  url: 'https://v3.football.api-sports.io/fixtures?team=541&season=2022',
      //  headers: {
      //    'x-rapidapi-key': `${process.env.API_KEY}`,
      //    'x-rapidapi-host': 'v3.football.api-sports.io'
      //  }
      //};

      //const result = await axios.get(config.url, config);
      //const infos = result.data.response;

      //const recent = infos.map(e => e.date > 2022)

      res.send('Welcome on my tech news api');
  },

  news: async (req, res) => {
    
    const news = [];

    try {
      axios.get('https://www.theverge.com/tech')
        .then(response => {
          const html = response.data;
          const $ = cheerio.load(html);

          $('a:contains("Google")', html).each(function () {
            const title = $(this).text();
            const url = $(this).attr('href');

            news.push({
              title,
              url
            });
          });

          res.json(JSON.stringify(news, null, 2));
        });
    } catch(e) {
      throw new Error(e);
    }
  }
};


module.exports = mainController;
