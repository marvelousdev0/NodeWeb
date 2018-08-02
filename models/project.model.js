const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

var projectSchema = Schema({
  _id     : Number,
  projectName    : String,
  domainId : [{ type: Schema.Types.ObjectId, ref: 'Domains' }]
});

var domainSchema = Schema({
    _id     : Number,
    domainName    : String
});

var Projects  = mongoose.model('Projects', projectSchema);
var Domains = mongoose.model('ProjDomain', domainSchema);

module.exports={
    Projects,
    Domains
}