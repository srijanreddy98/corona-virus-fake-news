const axios = require('axios').default;

const routes = (app) => {
    app.post('/api/query', (req, res) => {
        axios.post('http://ab096626-5f0f-4307-a1ce-1f11c4f47766.southeastasia.azurecontainer.io/score', {
          data: [req.body.query]
        })
          .then(function (response) {
            res.send(JSON.parse(response.data));
          })
          .catch(function (error) {
            res.status(500).send(error);
          });
    });
}

module.exports = {routes};
