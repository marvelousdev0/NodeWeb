module.exports = (app) => {

    // Require the controllers
    const landingpage_controller = require('../controllers/landingpage.controller');

    app.get('/', landingpage_controller.init);

    app.get('/landing', landingpage_controller.init);

    
}