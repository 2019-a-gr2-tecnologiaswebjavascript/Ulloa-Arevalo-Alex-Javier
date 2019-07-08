/**
 * Tienda.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: true
    },
    dueno: {
      type: 'string',
      required: false
    },
    arregloTiendaProductos: {
    collection: 'tiendaProducto',
    via: 'fkTienda'
  }

  },

};

