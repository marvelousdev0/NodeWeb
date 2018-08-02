module.exports = (app) => {

    // Require the controllers
    const project_controller = require('../controllers/project.controller');

    app.get('/projects', project_controller.getAllProjects);

    app.get('/project/:domainId', project_controller.projectByDomainId);

    
}