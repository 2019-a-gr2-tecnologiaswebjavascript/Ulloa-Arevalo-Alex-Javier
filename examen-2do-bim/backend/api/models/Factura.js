/**
 * Factura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cliente: {
      type: 'string',
      required: true,
    },
    cedula: {
      type: 'string',
      required: true,
    },
    direccion: {
      type: 'string',
    },
    telefono: {
      type: 'string',
    },
    correo: {
      type: 'string',
    },
    total: {
      type: 'number',
      required: true
    },
    arregloDetalleFactura: {
      collection: 'detalleFactura',
      via: 'fkFactura'
    },
    fkUsuario: {
      model: 'usuario',
      required: true
    }

  },

};

