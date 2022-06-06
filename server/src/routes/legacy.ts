const legacyExpress = require('express');
const legacyRouter = legacyExpress.Router();
const { getLegacy } = require('../controllers/legacy-controllers/index');

// Sign in will redirect to :id
legacyRouter.route('/').get(getLegacy);

module.exports = legacyRouter;
