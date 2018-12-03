const Iman = require('../models/Iman');
const imanController = {};

imanController.store = function(req, res, next){
    let iman = new Iman({
        c1: req.body.c1,
        c2: req.body.c2,
        c3: req.body.c3
    });

    iman.save(function(err){
        if(err)
        return res.status(400).send({"err": err});
        return res.status(200).json({"message": "creado con exito"});
    });
}

imanController.getImanes = function(req, res, next){
    Iman.find({}, function(err, imanes){
        if(err)
        return res.status(400).send({"err": err});
        return res.status(400).send({imanes});
    });
}

imanController.delete = function(req, res, next){
    let {id} = req.params;
    Iman.deleteOne({_id:id}, function(err){
        if(err){
            return res.status(400).send({"err": err});
        }
        return res.status(200).json({"message": "eliminado con exito"});
    });
}

imanController.buscar = function(req, res, next){
    let {id} = req.params;
    Iman.findById(id, function(err, imanes){
        if(err){
            return res.status(400).send({"err": err});
        }
        return res.status(200).json({imanes});
    });
}

imanController.update = async function(req, res, next){
    let {id} = req.params;
    await Iman.update({_id:id}, req.body);
    return res.status(200).json({"message": "actualizado con exito"});
}

module.exports = imanController;