import express, { json } from 'express'
import IndexRoutes from './routes/index.routes'
import PlantsRoutes from './routes/plants.routes'
const app = express()

// Configuraciones
app.set('port', process.env.PORT || 3000)
app.use(json())
app.use(IndexRoutes)
app.use(PlantsRoutes)
// Rutas

export default app