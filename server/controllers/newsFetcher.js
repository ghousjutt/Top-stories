require('dotenv').config({ path: '../.env' })
const https = require("https");

module.exports = async (req, res) => {
  return https.get(`${process.env.base_url}?api-key=${process.env.api_key}`, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      data = JSON.parse(data)
      res.status(200).json({ status: 'Success', result: data })
    });

    resp.on('error', (err) => {
      res.status(404).json({ status: err })
    });
  })
}