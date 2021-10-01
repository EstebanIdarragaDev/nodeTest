const colors = require('colors');
const {crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


crearArchivo({base, li, listar} = argv)
    .then(resp => console.log(resp.blue))
    .catch(err => console.log(err.red))











