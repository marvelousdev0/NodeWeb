const domainmodel = require('../models/domain.model');
const domaindao = require('../dao/domain.dao');
const db = require('../db/mongodb');

exports.init = (req, res) => {
    
    db.collection('Domains').find().toArray(function(err, domains) {
        if (err) return res.status(500).send({message: err.message || "Some error occurred while retrieving domains." });
        res.status(500).send({"domains":domains});
    })
};