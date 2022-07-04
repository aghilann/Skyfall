const legacyExpress = require('express');
const legacyRouter = legacyExpress.Router();
const { getLegacy, patchLegacy, deleteLegacy, postLegacy } = require('../controllers/legacy-controllers/index');

// Sign in will redirect to :id
legacyRouter.route('/:id').get(getLegacy).patch(patchLegacy).delete(deleteLegacy).post(postLegacy);

module.exports = legacyRouter;
