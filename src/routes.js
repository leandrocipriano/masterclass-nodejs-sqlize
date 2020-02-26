const express = require('express');
const UserController = require('./controllers/UserController');
const AddressesController = require('./controllers/AddressesController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

/*routes.get('/', (req, res) => {
    return res.json({ hello: 'World' });
});*/

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

//Na api informo ao usuário user será criado o endresso 
routes.post('/users/:user_id/addresses', AddressesController.store);
routes.get('/users/:user_id/addresses', AddressesController.index);

routes.post('/users/:user_id/techs', TechController.store);
routes.get('/users/:user_id/techs', TechController.index);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;