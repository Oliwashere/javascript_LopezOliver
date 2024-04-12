var registros = []
var opcion = 0;
do{
    opcion=Number(prompt(`Selección de roles \n
1. Coordinador \n
2. trainer \n
0. Salir`))
switch (opcion){
        case 1:
            console.log(registros)
break;
        case 2:
            var nuevo = prompt("Ingresa un elemento para los registros")
            registros.push(nuevo)
        break
    case 0:
        alert("Hasta luego")
    }

}
while(opcion!=0) 