let calzadoss=  prompt("Bienvenido a LYP CALZADOS realice su compra");

class calzado {
    constructor(calzado){
    this.id = calzado.id;
    this.color = calzado.color;
    this.precio = calzado.precio;
    this.cantidad = 1;
    this.numero = calzado.numero;
    this.precioTotal= calzado.precio;
    this.tipo= calzado.tipo}

    agregarProducto(){
        this.cantidad++;
    }
    quitarProducto(){
        this.cantidad--;
    }
    ultimoPrecioTotal(){
        this.precioTotal= this.precio*this.cantidad;
    }
};

//Constantes y variables.

const calzados =[
   {
        id:0,
        color: plateado,
        precio: 1300,
        cantidad:1,
        tipo:zapatilla,
        numero:26,
    },
    {
        id:1,
        color: rosaBrillo,
        precio: 1300,
        cantidad:1,
        tipo:zapatilla,
        numero:23,
    },
    {
        id:2,
        color: negro,
        precio: 1300,
        cantidad:1,
        tipo:zapatilla,
        numero:21,
    },
    {
        id:3,
        color: azul ,
        precio: 1300,
        cantidad:1,
        tipo:zapatilla,
        numero:23,
    },
    {
        id:4,
        color: celeste,
        precio: 1000,
        cantidad:1,
        tipo:Sandalias,
        numero:23,
    },
    {
        id:5,
        color: amarillo,
        precio: 1000,
        cantidad:1,
        tipo:Sandalias,
        numero:24,
    },
    {
        id:6,
        color: negro,
        precio: 1000,
        cantidad:1,
        tipo:Sandalias,
        numero:20,
    },
    {
        id:7,
        color: verdeMusgo,
        precio: 1000,
        cantidad:1,
        tipo:Sandalias,
        numero:23,
    },
       
];
let carrito=[];
let precioTotal;
function menuCompra(){
let idProducto = prompt(
`Escriba el numero del producto a comprar o 'ESC' para finalizar
        0: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
         1: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
          2: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
           3: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
            4: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
             5: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
              6: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
               7: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
`);
 while ( idProducto !== "ESC"){
        let calzadoEnCarrito = carrito.find((elemento)=>{
if(elemento.id == idProducto){
    return true;
}})
        if(calzadoEnCarrito){
            let index = carrito.findIndex((elemento) =>{
                if (elemento.id === calzadoEnCarrito.id){
                    return true;
                }
            });
carrito[index].agregarProducto();
carrito[index].ultimoPrecioTotal();
alert(`se ha añadido otras unidades de calzados ${carrito[index].tipo}. Cantidad: ${carrito[index].cantidad}. Color: ${carrito[index].color} `);}
else{
    carrito.push(new calzado (calzados[idProducto]));
    alert(`Se ha añadido al carrito el calzado ${calzados[idProduto].tipo}`)};
idProduto = prompt(`¿Queres seguir comprando?. Escriba el número del producto que desea o escriba ESC para finalizar
0: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
         1: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
          2: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
           3: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
            4: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
             5: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
              6: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
               7: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}`);}}
               function tenerPrecioTotal(){
                   let precioTotal = 0;
                   for( const producto of carrito){
                       precioTotal += producto*precioTotal;
                   }
                   return precioTotal;
               }
               menuCompra();
               precioTotal = tenerPrecioTotal();
               alert(`el precio de total de tu compra es de ${precioTotal} Gracias por tu compra!`);
               let arrayOrdenadoPorPrecio = calzados.sort((a,b) =>a.precio-b.precio);
               console.log("Array ordenado por precio");
               console.table(arrayOrdenadoPorPrecio);