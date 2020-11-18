const express = require('express');
const router = express.Router();
//import enciclopediaController from '../controllers/enciclopedia_controller'
const enciclopediaController = require('../controllers/enciclopedia_controller');


//Ruta para listar
router.get('/enciclopedia/listInfo', async (req, res) => {
    const enciclopedia = await enciclopediaController.listInfo()
    //console.log(enciclopedia);
    //res.send(enciclopedia);
    res.render('enciclopedia_list', {enciclopedia})
})

//Rutas para agregar 
router.get('/enciclopedia/add', async (req, res) => {
    res.render('enciclopedia_add');
})


router.post('/enciclopedia/new-info', async (req, res) => {
    const {title, description, content, category } = req.body;
    const errors = [];
    if(!title){
        errors.push({text: 'Por favor ingrese el titulo'});
    }
    if(!description){
        errors.push({text: 'Por favor ingrese una descripcion'});
    }
    if(!content){
        errors.push({text: 'Por favor ingrese el contenido'});
    }
    if(!category){
        errors.push({text: 'Por favor ingrese una categoria'});
    }
    if(errors.length > 0){
        const info = {title, description, content, category }
       //res.send(info);
        res.render('enciclopedia_add', {
            errors,
            title,
            description,
            content,
            category
    });
    }else{
        const info = {title, description, content, category }
        console.log(info);
        const result = await enciclopediaController.createInfo(info);
        console.log(result);
        //res.send(result);
    res.redirect('/enciclopedia/listInfo');
    }
    
})

module.exports = router;