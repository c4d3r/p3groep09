/**
 * Created by Bram on 4/11/2014.
 */
'use sctrict'

var _ = require('lodash');
var Categorie =  require('./categorie.model');


//Lijst van vakantiecategories weergeven
exports.index = function(reg, res){
    Categorie.find(function(err, categories){
        if(err){return handleError(res, err);}
        return res.json(200,categories);
    });
};

//Een vakantiecategorie weergeven
exports.show = function(reg, res){
  Categorie.findById(reg.param.id, function(err, categorie){
     if(err){return handleError(res, err);}
     if(!categorie){res.send(404);}
     return res.json(categorie);
  });
};

//Maakt een nieuwe vakantieCategorie aan in de db
exports.create = function(req, res) {
    Categorie.create(req.body, function(err, categorie) {
        if(err) { return handleError(res, err); }
        return res.json(201, categorie);
    });
};

// Updates de bestaande vakantiecategorie
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    Categorie.findById(req.params.id, function (err, categorie) {
        if (err) { return handleError(res, err); }
        if(!categorie) { return res.send(404); }
        var updated = _.merge(categorie, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.json(200, categorie);
        });
    });
};

//Verwijderd een vakantiecategorie
exports.destroy = function(req, res) {
    Categorie.findById(req.params.id, function (err, categorie) {
        if(err) { return handleError(res, err); }
        if(!categorie) { return res.send(404); }
        categorie.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}


