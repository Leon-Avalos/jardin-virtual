import express, { json } from 'express'
import IndexRoutes from './routes/index.routes'
import PlantsRoutes from './routes/plants.routes'
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.use(json())

// Routes
app.use(IndexRoutes)
app.use(PlantsRoutes)


export default app