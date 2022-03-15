class Calzado {
    constructor(calzado){
    this.id = calzado.id;
    this.color = calzado.color;
    this.precio = calzado.precio;
    this.cantidad = cantidad;
    this.numero = calzado.numero;
    this.tipo= calzado.tipo
    this.precioTotal= calzado.precio;
    }

    agregarProducto(){
        this.cantidad++;
    }
    quitarProducto(){
        this.cantidad--;
    }
    ultimoPrecioTotal(){
        this.precioTotal= this.precio * this.cantidad;
    }
}

//Constantes y variables.

const calzados =[
   {
        id:0,
        color:"plateado",
        precio: 1300,
        cantidad:1,
        numero:26,
        tipo:"zapatilla",
        img:"./img/PhotoRoom-20220218_095456.png"
        
    },
    {
        id:1,
        color: "rosaBrillo",
        precio: 1300,
        cantidad:1,
        numero:23,
        tipo:"zapatilla",
        img:"./img/PhotoRoom-20220218_095426.png"
        
    },
    {
        id:2,
        color:"negro",
        precio: 1300,
        cantidad:1,
        numero:21,
        tipo:"zapatilla",
        img:"./img/PhotoRoom-20220218_095357.png"
        
        
    },
    {
        id:3,
        color:"azul" ,
        precio: 1300,
        cantidad:1,
        numero:23,
        tipo:"zapatilla",
        img:"./img/PhotoRoom-20220218_095319.png"
        
    },
    {
        id:4,
        color:"celeste",
        precio: 1000,
        cantidad:1,
        numero:23,
        tipo: "Sandalias",
        img:"./img/PhotoRoom-20211206_145756_(1).png"
        
    },
    {
        id:5,
        color:"amarillo",
        precio: 1000,
        cantidad:1,
        numero:24,
        tipo:"Sandalias",
        img:"./img/PhotoRoom-20211206_145835_(1).png"

       
    },
    {
        id:6,
        color:"negro",
        precio: 1000,
        cantidad:1,
        numero:20,
        tipo:"Sandalias",
        img:"./img/PhotoRoom-20211206_145937_(2).png"
        
    },
    {
        id:7,
        color:"verdeMusgo",
        precio: 1000,
        cantidad:1,
        numero:23,
        tipo:"Sandalias",
        img:"./img/PhotoRoom-20211206_150353_(1).png"
    },
       
];

let carrito =[];

//Funciones

function imprimirProductosHTML(calzados){
    let containerComprarItems = document.getElementById("container-comprar--items");
    for( const calzado of calzados){
        let card = document.createElement("div");
        card.innerHTML=` <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card bg-warning text-light bg-gradient" style="width: 18rem;">
                        <img src="${calzado.img}" id="" class="card-img-top" width="170px" height="250"
                            alt="calzados1">
                        <div class="card-body">
                            <h5 class="card-title"> ${calzado.tipo} </h5>
                            <p class="card-text">${calzado.precio}</p>
                            <button id="Comprar${calzado.id}" type="button" onclick=""
                            class=" btn btn-danger">COMPRAR</button>
                        </div>
                    </div>
                </div>`
    
containerComprarItems.appendChild(card);

let boton = document.getElementById( `Comprar${calzado.id}`);
boton.onclick= () => agregarAlcarrito(calzado.id);

}
}

function agregarAlcarrito (idProducto){
    let calzadoEnCarrito = carrito.find((elemento) => elemento.id == idProducto);

    if(calzadoEnCarrito){
        let indice = carrito.findIndex((elemento) => elemento.id == calzadoEnCarrito.id)

        carrito[indice].agregarProducto();
        carrito[indice].ultimoPrecioTotal();   
    }
    else{
        carrito.push(new Calzado [idProducto]);
    }
    descripcionTabla(carrito);
}

function eliminarDeCarrito(id){
    let calzado = carrito.find((calzado) => calzado.id ===id);
    
    let indice = carrito.findIndex((element) => {
        if (element.id === calzado.id){
            return true;
        }
    });

    if (calzado.cantidad >1){
        console.log(`cantidad disponible:${calzado.cantidad}`);
     
        carrito[indice].quitarProducto();
        carrito[indice].ultimoPrecioTotal();

    } else{
        carrito.splice(indice,1);

        if(carrito.length === 0){
            carrito= [];
        }
    }
}




//FUNCION QUE RECIBE COMPRA Y LO IMPRIME EN HTML EN TABLA

function descripcionTabla (array){
    let containe = document.getElementById("ListaTablaCarrito");
    containe.innerHTML="";

    let precioTotal = obtenerPrecioTotal(array);
    
    let listaTable = document.createElement("div");

    listaTable.innerHTML = `<table id="tablaCarrito" class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio </th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody id="bodyTabla">
                <tr>
                    <td>Total: $${precioTotal}</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
            <tr> 
                <td> <button id="vaciarCarrito" class="btn btn-dark"> Vaciar Carrito </button> </td>
            </tr>
            </tbody>
        </table>
    `; 



let vaciar = document.getElementById("vaciarCarrito");

containe.appendChild(listaTable);

let bodyTabla = document.getElementById("bodyTabla");

for (let calzado of array){
    let item = document.createElement("div");
    item.innerHTML=`
                <tr>
                <th scope="row">1</th>
                    <td>${calzado.tipo}</td>
                    <td>${calzado.cantidad}</td>
                    <td>${calzado.color}</td>
                    <td>${calzado.precio}</td>
                    <td> <button id="eliminar${calzado.id}" type="button" class="btn btn-darger"> Vaciar Carrito </button> </td>
                </tr>`;

                bodyTabla.appendChild(item);

                let eliminarDeCarrito = document.getElementById(`eliminar${calzado.id}`)
                eliminarDeCarrito.addEventListener("click", ()=>{
                    eliminarDeCarrito(calzado.id)
                });


}
}

escripcionTabla(carrito);
function BorrarCarrito(){
    carrito=[]
};
let imprimirTabla = BorrarCarrito;


function obtenerPrecioTotal(array) {
  let precioTotal = 0;

  for (const producto of array) {
    precioTotal += producto.precioTotal;
  }

  return precioTotal;
}

imprimirProductosHTML(calzados);







/*PRODUCTO BUSCADO CON FIND
 const productoBuscado = calzados.find(tipo =>tipo.id===4)
 alert(productoBuscado)*/

/*let carrito=[];
let precioTotal;
//USO DE FIND- 
function menuCompra(){
let idProducto = prompt(
`Escriba el numero del producto a comprar o 'ESC' para finalizar
        0: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
         1: ${calzados[1].color}, Precio: ${calzados[1].precio}, Tipo:${calzados[1].tipo}
          2: ${calzados[2].color}, Precio: ${calzados[2].precio}, Tipo:${calzados[2].tipo}
           3: ${calzados[3].color}, Precio: ${calzados[3].precio}, Tipo:${calzados[3].tipo}
            4: ${calzados[4].color}, Precio: ${calzados[4].precio}, Tipo:${calzados[4].tipo}
             5: ${calzados[5].color}, Precio: ${calzados[5].precio}, Tipo:${calzados[5].tipo}
              6: ${calzados[6].color}, Precio: ${calzados[6].precio}, Tipo:${calzados[6].tipo}
               7: ${calzados[7].color}, Precio: ${calzados[7].precio}, Tipo:${calzados[7].tipo}
`);
 while ( idProducto !== "ESC"){
        let calzadoEnCarrito = carrito.find((elemento)=>{
if(elemento.id == idProducto){
    return true;
}});
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
    alert(`Se ha añadido al carrito el calzado ${calzados[idProducto].tipo}`);
}
idProducto = prompt(`¿Queres seguir comprando?. Escriba el número del producto que desea o escriba ESC para finalizar
0: ${calzados[0].color}, Precio: ${calzados[0].precio}, Tipo:${calzados[0].tipo}
         1: ${calzados[1].color}, Precio: ${calzados[1].precio}, Tipo:${calzados[1].tipo}
          2: ${calzados[2].color}, Precio: ${calzados[2].precio}, Tipo:${calzados[2].tipo}
           3: ${calzados[3].color}, Precio: ${calzados[3].precio}, Tipo:${calzados[3].tipo}
            4: ${calzados[4].color}, Precio: ${calzados[4].precio}, Tipo:${calzados[4].tipo}
             5: ${calzados[5].color}, Precio: ${calzados[5].precio}, Tipo:${calzados[5].tipo}
              6: ${calzados[6].color}, Precio: ${calzados[6].precio}, Tipo:${calzados[6].tipo}
               7: ${calzados[7].color}, Precio: ${calzados[7].precio}, Tipo:${calzados[7].tipo}`);}}
               function tenerPrecioTotal(){
                   let precioTotal = 0;
                   for( const producto of carrito){
                       precioTotal += producto.precioTotal;
                   }
                   return precioTotal;
               }
               menuCompra();
               precioTotal = tenerPrecioTotal();
               alert(`el precio de total de tu compra es de ${precioTotal} Gracias por tu compra!`);
               let arrayOrdenadoPorPrecio = calzados.sort((a,b) =>a.precio-b.precio);
               console.log("Array ordenado por precio");
               console.table(arrayOrdenadoPorPrecio);

//DESAFIO CLASE 8 DOM

function imprimirCompraTotal( DOM){
   let dom = document.getElementById("dom");
   dom.innerHTML=`
   <div>
   <h2>${elemento.tipo}</h2>
   <img src="${elemento.img}">
   <h5>${elemento.color}</h5>
   <p> Precio:${elemento.precio}</p>
   `
}

function imprimirPromp(){
    let carrito= document.querySelector("#carrito");
    let pedidoUsuario =prompt("¿Que calzado desea comprar?");
    let parrafo = document.createElement("p");
    parrafo.textContent=`ELEGISTE EL CALZADO ${pedidoUsuario};
    `
    carrito.appendChild(parrafo);
}*/
