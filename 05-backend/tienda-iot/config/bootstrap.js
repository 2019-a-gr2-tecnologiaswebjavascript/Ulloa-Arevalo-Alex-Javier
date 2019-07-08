/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

const axios = require('axios'); // importar con Noda.js

module.exports.bootstrap = async function() {

  cambioHumedad(axios);


};

function cambioHumedad(axios) {
  setInterval(
     async ()=> {
       const temperaturaActual = Math.random(10) * 10;

      console.log('Temperatura:', temperaturaActual );
      // usar axios para enviar peticion HTTP
       const url = 'http://localhost:1337/temperatura'
       const objetoEnviar = {
         medicion: temperaturaActual
       }
       const respuesta = await axios.post(
         url,
         objetoEnviar
       );
       //console.log(respuesta);
    },
    2000
  )

}
