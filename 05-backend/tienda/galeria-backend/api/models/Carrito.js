/**
 * Carrito.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fechaCompra: {
      type: 'string'
    },
    cantidad: {
      type: 'number',
      required: true
    },
    fkTiendaProducto: {
      model: 'TiendaProducto',
      required: true
    }

  },

};

