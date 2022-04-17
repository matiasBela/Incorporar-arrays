 


class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = Number(precio);
        this.cantidad = Number(cantidad);
    }
}

const productos = [];
productos.push(new Producto("FIDEOS", 1100, 20, false));
productos.push(new Producto("LECHE", 1700, 24, false));
productos.push(new Producto("GALLETITAS", 1800, 40, false));
productos.push(new Producto("ACEITE", 2500, 24, true));
productos.push(new Producto("SAL", 2300, 50, false));
productos.push(new Producto("SALSA", 1400, 10, false));
productos.push(new Producto("CAFE", 3100, 16, false));
productos.push(new Producto(prompt("Ingrese el nombre del producto que esta buscando") ,prompt("Ingrese su precio"),prompt("Ingrese la cantidad del mismo")));
      
          
      
  
 

