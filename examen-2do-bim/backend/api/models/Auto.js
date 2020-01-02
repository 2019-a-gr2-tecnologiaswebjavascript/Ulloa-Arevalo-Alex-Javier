/**
 * Auto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    chasis: {
      type: 'number',
      required: true
    },
    nombreMarca: {
      type: 'string',
      required: true
    },
    colorUno: {
      type: 'string',
      required: true
    },
    colorDos: {
      type: 'string'
    },
    nombreModelo: {
      type: 'string',
      required: true
    },
    anio: {
      type: 'number',
      required: true
    },
    precio: {
      type: 'number',
      required: true,
    },
    fkConductor: {
      model: 'conductor',
      required: true
    },
    arregloDetalleFactura: {
      collection: 'detalleFactura',
      via: 'fkAuto'
    }
  },

};

