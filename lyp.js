class Calzado {
    constructor(calzado){
    this.id = calzado.id;
    this.color = calzado.color;
    this.precio = calzado.precio;
    this.cantidad = 1;
    this.numero = calzado.numero;
    this.tipo= calzado.tipo;
    this.precioTotal= calzado.precio;
    this.img = calzado.img;
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
        card.innerHTML=`
               
                    <div class="card bg-warning text-light bg-gradient" style="width: 18rem;">
                        <img src="${calzado.img}" id="" class="card-img-top" width="170px" height="250"
                            alt="calzados1">
                        <div class="card-body">
                            <h5 class="card-title"> ${calzado.tipo} </h5>
                            <p class="card-text">${calzado.precio}</p>
                            <button id="Comprar${calzado.id}" type="button" onclick=""
                            class="comprar">COMPRAR</button>
                        </div>
                </div>`
    
containerComprarItems.appendChild(card);

let boton = document.getElementById( `Comprar${calzado.id}`);
boton.onclick= () => agregarAlcarrito(calzado.id);

}
}

//STORAGE

function chequearCarritoStorage (){
    let contenidoEnStorage= JSON.parse(localStorage.getItem("carritoEnStorage"));
    console.log("contenido en chequear Carrito en ls", contenidoEnStorage);

    if(contenidoEnStorage){
        let array=[];
        for(let i = 0 ; i < contenidoEnStorage.length; i++ ) {
            let calzado = new Calzado(
                contenidoEnStorage[i],
                contenidoEnStorage[i].cantidad);
                calzado.ultimoPrecioTotal();
                array.push(calzado);

        }
return array;
    }
    return[];
}

function agregarAlcarrito (idProducto) {
    let calzadoEnCarrito = carrito.find((elemento) => elemento.id == idProducto);

    if(calzadoEnCarrito){
        let indice = carrito.findIndex((elemento) => elemento.id == calzadoEnCarrito.id)

        carrito[indice].agregarProducto();
        carrito[indice].ultimoPrecioTotal();   
    }
    else{
        carrito.push(new Calzado(calzados[idProducto]));
    }
    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
    descripcionTabla(carrito);
}

function eliminarDeCarrito(id){
    let calzado = carrito.find((calzado) => calzado.id === id);
    
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
    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
    descripcionTabla(carrito);
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
                    <th>Imagen</th>
                    <th>Descripcion</th>
                    <th>Cantidad</th>
                    <th>Color</th>
                    <th>Precio </th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody id="bodyTabla">
            </tbody>
                
            <tr> 
                <td> <button id="vaciarCarrito" class="btn btn-danger"> Vaciar Carrito </button> </td>
            </tr>
            <tr>
            <td class="text-end fs-3 fw-bold">Total: $${precioTotal}</td>
            </tr>

            
        </table>
    `; 

containe.appendChild(listaTable);

let botonVaciar = document.getElementById("vaciarCarrito");
botonVaciar.addEventListener( "click" , borrarCarrito);

let bodyTabla = document.getElementById("bodyTabla");

for (let calzado of array){
    let item = document.createElement("div");
    item.innerHTML=`
                <td class="imag">
                <img src="${calzado.img}" width="100">
                </td>

                    <td class"tipo">${calzado.tipo}</td>
                    <td class"cant">${calzado.cantidad}</td>
                    <t class="color">${calzado.color}</td>
                    <td class="precio">${calzado.precio}</td>
                    <td class="elim"> <button id="eliminar${calzado.id}" type="button" class="btn btn-darger"> Eliminar </button> </td>`;

                bodyTabla.appendChild(item);

                let borrarItem = document.getElementById(`eliminar${calzado.id}`);
                borrarItem.addEventListener("click", ()=>{
                    eliminarDeCarrito(calzado.id);
                });


}
}

function borrarCarrito(){
    carrito = [];
descripcionTabla(carrito);

}


function obtenerPrecioTotal(array) {
  let precioTotal = 0;

  for (const producto of array) {
    precioTotal += producto.precioTotal;
  }

  return precioTotal;
}

imprimirProductosHTML(calzados);
carrito= chequearCarritoStorage();








