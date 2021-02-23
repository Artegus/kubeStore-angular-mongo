const express = require('express');
const router = express.Router();

const controller = require(`../controllers/cubes`);

router.get(`/cubes/:id`, controller.getOne);
router.get(`/cubes`, controller.getAll);
router.post(`/cubes`, controller.addNew);
router.put(`/cubes`, controller.modify);
router.delete(`/cubes/:id`, controller.removeOne);
router.get(`/tableCubes`,  (req, res) => {
    if (req.accepts('html')) {
        res.redirect('/index.html')
    }
})

module.exports = router;