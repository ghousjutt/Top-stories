let express = require('express')
let router = express.Router()
let newsFetcher = require('../controllers/newsFetcher')

module.exports = () => {
    router.route('/news').get(newsFetcher)
    return router
}

