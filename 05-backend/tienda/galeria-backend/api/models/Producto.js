/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true,
      unique: true
    },
    tipoProducto: {
      type: 'string',
      required: false
    },
    valor: {
      type: 'number',
      required: true
    },
    arregloTiendaProductos: {
      collection: 'tiendaProducto',
      via: 'fkProducto'
    }

  },

};

