/**
 * Rutas de usuarios / Auth
 * host + /api/auth
 */

const { Router } = require("express");
const router = Router();


router.get('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'get'
  });
});


module.exports = router;
