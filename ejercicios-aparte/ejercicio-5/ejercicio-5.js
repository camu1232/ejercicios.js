let exito = false;
function descargarArchivo(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve('Archivo descargado correctamente');
            } else {
                reject('Hubo un error al descargar el archivo');
            }
        }, 2000);
    })
}

async function manejarDescarga() {
    try {
        const resultado = await descargarArchivo(exito);
        console.log(resultado);
    }
    catch (error) {
        console.log(error);
    }
    
}

manejarDescarga();