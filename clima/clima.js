const axios = require('axios');

const getClima = async(latitud, longitud) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ latitud }&lon=${ longitud }&units=metric&lang=es&appid=49159df42b911f73bb52a0889b082922`)
    let { temp, temp_min, temp_max } = resp.data.main;
    let { main, description } = resp.data.weather[0];
    return {
        temperatura: temp,
        tminima: temp_min,
        tmaxima: temp_max,
        clima: main,
        condicion: description
    }
}

module.exports = {
    getClima
}