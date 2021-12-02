const store = require('./store');
const response = require('../../network/response');

async function getOfertas(req, res){
  try {
    // const filterOfertas
    const solicitudes = await store.list()
    response.success(req, res, solicitudes, 200)
  } catch (error) {
      response.error(req, res, 'Error al consultar las solicitudes de carga', 500, error)
  }
}

async function addOferta(req, res) {
  try {
    const solicitud = req.body;
    const newSolicitud = await store.add(solicitud)
    response.success(req,res, newSolicitud,201)
  } catch (error) {
    response.error(req, res, 'Error al crear la solicitud de carga', 500, error)
  }
}

module.exports = {

  getOfertas,
  addOferta,

}