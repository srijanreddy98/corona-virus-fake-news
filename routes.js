const axios = require('axios').default;
// http://ab096626-5f0f-4307-a1ce-1f11c4f47766.southeastasia.azurecontainer.io/score
const urlAcc = 'http://531abe45-1cc2-4e37-8d9a-c2d675099237.eastus.azurecontainer.io/score';
const urlFast = 'http://ffd2842d-6a8a-48f1-8c55-4f000550dabc.southeastasia.azurecontainer.io/score';
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
