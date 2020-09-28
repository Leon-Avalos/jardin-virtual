import { Router } from 'express'
import { connect } from '../database'
const router = Router()


router.get('/listPlants', async (req, res) => {
    const db = await connect()
    const result = await db.collection('plants').find({}).toArray()
    res.json(result)
})

router.post('/createPlants', async (req, res) => {
    const db = await connect()
    const plant = {
        name: req.body.name,
        type: req.body.type
    }
    const result = await db.collection('plants').insertOne(plant)

    res.json({"Creado" : result})
})
export default router