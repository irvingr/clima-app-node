const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let termometro = await clima.getClima(coors.lat, coors.lng);
        return `
            El clima en ${ coors.direccion } es:\n
            Actual: ${ termometro.temperatura }
            Mínima: ${ termometro.tminima }
            Máxima: ${ termometro.tmaxima }\n
            Clima: ${ termometro.clima }
            Condiciones: ${ termometro.condicion }\n
            Coordenadas: (lat, lng) ${ coors.lat }, ${ coors.lng }
        `
    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(result => {
        console.log(result);
    })
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(`Dirección: ${ resp.direccion }`);
//         console.log(`  Latitud: ${ resp.lat }`);
//         console.log(` Longitud: ${ resp.lng }`);
//     })
//     .catch(err => console.log(err));

// clima.getClima(19.3307393, -99.4700459)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(e => console.log(e));