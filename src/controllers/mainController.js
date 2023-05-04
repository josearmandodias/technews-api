const axios = require('axios');
const cheerio = require('cheerio');

const articles = [];
const url = [];


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

      res.json('Welcome on my Real Madrid API')
  },

  news: async (req, res) => {

    try {
      const response = await axios.get('https://www.wired.com/');
      const html = response.data;
      const $ = cheerio.load(html);
  
      $('h2:contains("Twitter")', html).each(() => {
        const title = $(this).text();
        articles.push({
          title
        });
      })
  
      res.json(articles);
    } catch(e) {
      throw new Error(e);
    }
  }
};


module.exports = mainController;
