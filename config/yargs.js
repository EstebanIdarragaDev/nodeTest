const argv = require('yargs')
    .options({
        'b':{
            alias: 'base',
            type: 'number',
            describe: 'base para la tabla',
            demandOption: true
        },
        'li':{
            alias: 'limite',
            type: 'number',
            describe: 'Hasta donde va la tabla',
            default: 10,
            demandOption: false
        },
        'l':{
            alias: 'listar',
            type: 'boolean',
            default:false,
            describe: 'Muestra la tabla en consola',
            demandOption: false
        }
    })
    .check((argv, options) =>{
        if(isNaN(argv.b)){
            throw 'La base debe ser un numero'
        }

        if (isNaN(argv.li)){
            throw 'El limite debe ser un numero'
        }

        return true
    })
    .argv;

module.exports = argv;