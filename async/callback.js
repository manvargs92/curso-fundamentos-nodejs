// ASINCRONÍA
function soyAsincrona(nombre, miCallback) {
    // console.log("Hola soy una fución asíncrona");
    setTimeout(function () {
        console.log(`Hola ${nombre}`);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}

console.log("Iniciando proceso...");

soyAsincrona("Manuel", function (nombre) {
    adios(nombre, function () {
        console.log("Terminando el proceso...");
    });
    // console.log("Terminando proceso...");
});

// soyAsincrona("Manuel", function () {});
// adios("Manuel", function () {});