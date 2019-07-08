/**
 * ItemCarritoCompras.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    valor: {
      type: 'string'
    },
    fechaCompra: {
      type: 'string',
      columnType: 'date'
    },
    cantidad:{
      type: 'number'
    }

  },

};

