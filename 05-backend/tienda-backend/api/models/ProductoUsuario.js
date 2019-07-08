/**
 * ProductoUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cantidad: {
      type: 'number',
      min: 1
    }, // Configuarion del HIJO
    fkUsuario: { // Nombre del campo FK
      model: 'usuario', // modelo a relacionarse (PAPA)
      required: true // OPCIONAL
    },
    fkProducto: {
      model: 'producto',
      required: true
    }
  },

};

