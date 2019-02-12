const controllerUser = require('../controllers/users');

module.exports = (app) => {
    app.get('/users', controllerUser.users);
    app.post('/usersCreate', controllerUser.create);
    app.post('/usersUpdate', controllerUser.update);
    app.post('/usersDelete', controllerUser.delete);
    app.post('/users', controllerUser.postUsers);

}