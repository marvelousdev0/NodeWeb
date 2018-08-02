module.exports = (app) => {
    // Require the controllers
    const domain_controller = require('../controllers/domain.controller');
    app.get('/domains', domain_controller.domain_details);
 
}