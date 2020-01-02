/**
 * DetalleFactura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cantidad: {
      type: 'number',
      required: true,
    },
    subTotal: {
      type: 'number',
      required: true,
    },
    fkFactura: {
      model: 'factura',
      required: true
    },
    fkAuto: {
      model: 'auto',
      required: true
    }
  },

};

