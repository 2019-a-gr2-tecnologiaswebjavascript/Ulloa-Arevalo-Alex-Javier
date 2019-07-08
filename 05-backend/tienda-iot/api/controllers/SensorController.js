/**
 * SensorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  encenderLed: (req, res) => {
    const parametros = req.allParams();
    if(parametros.idLed) {
      console.log('Envendiendo led: ', parametros.idLed);
      return res.ok({mensaje: `led ${parametros.idLed} encendido`});
    } else {
      return res.badRequest(
        {
          error: 400,
          mensaje: 'No envia IdLed'
        }
      );
    }
  }

};

