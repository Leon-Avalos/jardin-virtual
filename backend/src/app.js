import express, { json } from 'express'
import IndexRoutes from './routes/index.routes'
import PlantsRoutes from './routes/plants.routes'
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.use(json())

// Routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
})
app.use(IndexRoutes)
app.use(PlantsRoutes)


export default app