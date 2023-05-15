const express = require("express");
const { User, Show } = require("../models/index")
// const { Router } = require("express")
// const restaurantR = Router();
const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
})
userRouter.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user)
})
userRouter.get('/:id/shows', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    const shows = await user.getShows()
    res.json(shows)
})
userRouter.put('/:id/shows', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    const show = await Show.create(req.body)
    await user.addShow(show)
    res.json(show)
})

module.exports = userRouter;