const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    //res.json({"Title":"Helo Word"});
    const data = {
        "name":"Ariel",
        "website":"arielmartin.ml"
    };
    res.json(data);
});

module.exports = router;