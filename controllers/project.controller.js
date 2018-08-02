const projectmodel = require('../models/project.model');
const domaindao = require('../dao/project.dao');
const db = require('../db/mongodb');


exports.getAllProjects = function (req, res) {
    db.collection('Projects').find().toArray(function(err, projects) {
        if (err) return res.status(500).send({message: err.message || "Some error occurred while retrieving projects." });
        res.status(500).send({"projects":projects});
    })
};

exports.projectByDomainId = function (req, res) {
     projectmodel.findOne({ 'Projects.domainId' :  req.param.domainId }).populate('Projects')
    .exec(function(err, projects){
        if (err) return res.status(500).send({message: err.message || "Some error occurred while retrieving projects." });
        res.status(500).send({"projects":projects});
    })
};