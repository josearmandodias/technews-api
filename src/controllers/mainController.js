const axios = require('axios');

const mainController = {

  home: async (req, res) => {
    try {
      const config = {
        method: 'GET',
        url: 'https://v3.football.api-sports.io/fixtures?team=541&season=2022',
        headers: {
          'x-rapidapi-key': `${process.env.API_KEY}`,
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };

      const result = await axios.get(config.url, config);
      const infos = result.data.response;
      res.json(infos.fixtures);
    } catch(e) {
      throw new Error(e);
    }
  }
};


module.exports = mainController;
