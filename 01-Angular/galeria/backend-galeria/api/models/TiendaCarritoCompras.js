/**
 * TiendaCarritoCompras.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreTienda: {
      type: 'string',

    },
    itemsCarritoComprados: {
      model: 'itemCarritoCompras',
      required: true
    }

  },

};

