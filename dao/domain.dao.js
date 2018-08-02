const db = require('../db/mongodb');

exports.getAllDomains = function (req, res) {
    db.collection('Domains').find().toArray(function(err, results) {
        if (err) return err;
        return results;
    })
};
