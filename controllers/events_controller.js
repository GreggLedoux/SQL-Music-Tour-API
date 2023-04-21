const events = require('express').Router()
const db = require('../models')
const { Event } =db
const { OP} = require('sequelize')

//CREATE
events.post('/', async(req,res) => {
    try {const createdEvent = await Event.create(req.body)

    }
})


//READ
events.get('/', async(req,res) => {
    try {
        const foundEvents = await Event.findAll()
            res.status(200).json(foundEvents)
        } catch(e) {
            res.status(500).json(e)
        }
    })
events.get('/:id', async(req, res) => {
    try {
        constfoundEvent = await Event.findOne({
            where: {
                [Op.or]: [
                    {event_id: req.params.id},
                    {name: req.query.name}
                ]
            }
        })
        req.status(200).json(foundEvent)
    } catch(e){
        res.status(500).json(e)
    }
})



