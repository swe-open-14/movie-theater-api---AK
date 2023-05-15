const express = require("express");
const { Show } = require("../models/index")
// const { Router } = require("express")
// const restaurantR = Router();
const showRouter = express.Router();

showRouter.get('/', async (req, res) => {
    const shows = await Show.findAll();
    res.json(shows)
})
showRouter.get('/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    res.json(show);
})
showRouter.get('/genre/:genre', async (req, res) => {
    const shows = await Show.findAll({where: {genre: req.params.genre}});
    res.json(shows)
})
showRouter.put('/rating/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id)
    const {rating} = req.body;
    const upShow = await show.update({rating})
    res.json(upShow)
})
showRouter.put('/status/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id)
    const {status} = req.body;
    const statShow = await show.update({status});
    res.json(statShow);
})
showRouter.delete('/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id)
    await show.destroy()
    res.send("Deletion Successful")
})
module.exports = showRouter;