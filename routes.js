const axios = require('axios').default;
// http://ab096626-5f0f-4307-a1ce-1f11c4f47766.southeastasia.azurecontainer.io/score
const urlAcc = 'http://6eb590bb-53d1-4c40-b3b5-16db70a1ce74.southeastasia.azurecontainer.io/score';
const urlFast = 'http://a4415373-ba28-4f99-b7da-75b95051ea80.southeastasia.azurecontainer.io/score';
const routes = (app) => {
    app.post('/api/query', (req, res) => {
      if(req.body.acc) {
        axios.post(urlAcc, {
          data: [req.body.query]
        })
          .then(function (response) {
            res.send(JSON.parse(response.data));
          })
          .catch(function (error) {
            res.status(500).send(error);
          });
      } else {
        axios.post(urlFast, {
          data: [req.body.query]
        })
          .then(function (response) {
            res.send(JSON.parse(response.data));
          })
          .catch(function (error) {
            res.status(500).send(error);
          });
      }
        
    });
}

module.exports = {routes};
