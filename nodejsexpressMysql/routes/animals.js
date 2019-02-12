const controllerAnimals = require('../controllers/animals');

module.exports = (app) => {
    app.get('/animalsRead', controllerAnimals.read);
    app.post('/animalsCreate', controllerAnimals.create);
    app.post('/animalsUpdate', controllerAnimals.update);
    app.post('/animalsDelete', controllerAnimals.delete);

}