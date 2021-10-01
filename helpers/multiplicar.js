const fs = require('fs');
const crearArchivo = async({base= 2, limite = 10, listar = false}) =>{
    try{
        let salida = '';

        for(let i = 1; i<= limite; i++){
            salida += `${base} * ${i} = ${i*base}\n`;

            if (listar){
                console.log(`${base} * ${i} = ${i*base}`);
            }
        }

        fs.writeFile(`./salida/tabla-${base}.txt`, salida,()=>{

        });

        return `Tabla del ${base} creada!!`.rainbow;
    }catch (err){
        return err;
    }

}

module.exports = {
   crearArchivo
}