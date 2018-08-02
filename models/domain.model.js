const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

let domainSchema = Schema({
  _id     : Number,
  domainName    : String
});

var Domains = mongoose.model('Domains', domainSchema);

module.exports={
    Domains
}