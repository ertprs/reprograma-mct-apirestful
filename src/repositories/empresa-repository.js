'use strict';

const mongoose = require('mongoose');
const Empresa = mongoose.model('Product');

exports.get = () => {
    return Empresa.find(
        { active: true },
        "nomeFantasia enderecoCompleto descricaoEmpresa site atendimentoVirtual redesSociais whatsapp");    
}

exports.getBySlug = (slug) => {
    return Empresa
        .findOne(
            {
                slug: req.params.slug,
                active: true,
            },
            "nomeFantasia descricaoEmpresa tags"
        );
}

exports.getById = (id) => {
    
    return Empresa
        .findById(id);
}

exports.getByTag = (tag) => {
    return Empresa
        .find(
        {
          tags: tag,
          active: true,
        },
        "title description profile tags"
      )
}

exports.create = (data) => {
    
} 
