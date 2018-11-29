const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeURL = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }
    let resultado = resp.data.results[0];
    let address = resultado.formatted_address;
    let { lat, lng } = resultado.geometry.location;
    // console.log(`Dirección: ${ address }`);
    // console.log(`Latitud: ${ lat }`);
    // console.log(`Longitud: ${ lng }`);
    // console.log(JSON.stringify(resp.data.results[0], undefined, 2));
    // console.log(resp.status);
    return {
        direccion: address,
        lat: lat,
        lng: lng
    }
}

module.exports = {
    getLugarLatLng
}