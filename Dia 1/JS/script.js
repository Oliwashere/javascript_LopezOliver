// ** FUNCION SIN RETORNO Y SIN PARAMETROS **
function funcionNormal(){
    console.log("Mi función");
}
// ** FUNCION SIN RETORNO Y CON PARAMETROS **
function suma(a,b){
    console.log(a+b);
}
// ** FUNCION CON RETORNO Y CON PARAMETROS **
function sumaR(a,b){
    //console.log(a+b);
    return a+b;
}
// ** FUNCION CON RETORNO Y SIN PARAMETROS **
function salonFavorito(){
    //console.log(a+b);
    return "P1";
}
// Ejercicio 1 
function celsiusAFahrenheit(n) {
    return ((n*9/5)+32);
}

const n = 10;

console.log(celsiusAFahrenheit(n))