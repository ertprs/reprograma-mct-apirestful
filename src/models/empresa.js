'use strict'

const mongoose = require('mongoose');
const EmpresaSchema = mongoose.Schema;

const empresaSchema = new Schema({
    nomeFantasia: {
        type: String,
        required: [true, 'O nome fantasia da empresa é obrigatório'],
        trim: true,
    },
  
    ativa: {
        type: Boolean,
        required: true,
        default: true,
    },
  
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true,
    },
  
    razaoSocial: {
        type: String,
        required: false,
        trim: true,
    },
  
    cnpj: {
        type: Number,
        required: false,
    },
     
    responsavel: {
        type: String,
        required: [true, 'O nome do responsável da empresa é obrigatório'],
    },
  
    enderecoCompleto: [{
        type: String,
        required: [true, 'O endereço da empresa é obrigatório'],
    }],
  
    descricaoEmpresa: {
        type: String,
        required: false,
    },
  
    perfil: {
        type: String,
        required: [true, 'Por favor informe com que tipo de público, sua loja trabalha.'],
    },
  
    site: {
        type: String,
        required: false,
    },
  
    atendimentoVirtual: {
        type: Boolean,
        required: [true, 'É necessário informar se a loja realiza atendimento virtual.'],
    },
  
    redesSociais: [{
        type: String,
        required: false,
    }],

    tags: [{
        type: String,
        required: true,      
   }],
  
    telefoneFixo: {
        type: Number,
        required: false,
    },
  
    ContatoWhatsapp: {
        type: Number,
        required: [true, 'O número de contato é obrigatório.'],
    }
    }, { collection: "empresa"}
  );

module.exports = mongoose.model('empresa', EmpresaSchema);
