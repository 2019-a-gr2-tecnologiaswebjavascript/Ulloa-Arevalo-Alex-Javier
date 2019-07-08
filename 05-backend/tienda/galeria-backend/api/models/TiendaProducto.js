/**
 * TiendaProducto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fkTienda: { // Nombre del campo FK
      model: 'tienda', // modelo a relacionarse (PAPA)
      required: true // OPCIONAL
    },
    fkProducto: {
      model: 'producto',
      required: true
    },
    arregloCarrito: {
      collection: 'carrito',
      via: 'fkTiendaProducto'
    }

  },

};

