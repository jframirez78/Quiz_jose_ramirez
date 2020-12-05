/*se crea index.js y se enlaza con index.html*/
//primer punto//

var TipoMotor = (5);
switch (TipoMotor) {
    case 0:
        document.write ('No hay establecido un valor definido para el tipo debomba');
            break;
    case 1:
        document.write ('La bomba es una bomba de agua');
        break;
    case 2:
        document.write ('La bomba es una bomba de gasolina');
        break;   
    case 3:
        document.write ('La bomba es una bomba de hormigón');
        break;
    case 4:
        document.write ('La bomba es una bomba de pasta alimenticia');
        break;
    case 5:
        document.write ('No existe un valor válido para tipo de bomba');
        break;          
}

//segundo punto//
function obtenerValoresConImpuestos(){
    var valorSinImpuesto = prompt('igrese el valor sin impuesto:');
    var tipoDeProducto = prompt('ingrese el tipo de producto (1, 2, 3): ');
    precio = Number ();
    producto = Number ();
    if (inNaN (precio) || isNaN (producto)){
        alert ('Debe ingresar números');
    }
    else if (producto !=1 && producto !=2 && producto !=3){
        switch (producto) {
            case 1:
            impuesto = Number(21);
            break;
    
            case 2:
            impuesto = Number(10);
            break;
    
            case 3:
            impuesto = Number(5);
            break;
    
            default:
            break;
        }

    }
}




