class Calzado2 {
    constructor(calzado2){
    this.id = calzado2.id;
    this.color = calzado2.color;
    this.precio = calzado2.precio;
    this.cantidad = 1;
    this.numero = calzado2.numero;
    this.tipo= calzado2.tipo;
    this.precioTotal= calzado2.precio;
    this.img = calzado2.img;
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

//CON SPREAD OPERATOR AGREGO UN NUEVO PRODUCTO A MI ARRAY DE OBJETOS CALZADOS

const Panchita = {id:8, color:"Azul",precio:1300,cantidad:1,numero:22,tipo:"panchitas",img:"./img/panchitaazulraya.jpg"

};
const calzados2=[
    ...calzados,Panchita];

    //console.log(calzados2);



//DESESTRUCTURACION
const {id, color, precio, cantidad, numero, tipo, img} =calzados2;



let carrito =[];

//Funciones

function imprimirProductosHTML(calzados2){
    let containerComprarItems = document.getElementById("container-comprar--items");
    for( const calzado2 of calzados2){
        let card = document.createElement("div");
        card.innerHTML=`
               
                    <div class="card bg-warning text-light bg-gradient" style="width: 18rem;">
                        <img src="${calzado2.img}" id="" class="card-img-top" width="170px" height="250"
                            alt="calzados1">
                        <div class="card-body">
                            <h5 class="card-title"> ${calzado2.tipo} </h5>
                            <p class="card-text">$${calzado2.precio}</p>
                            <button id="Comprar${calzado2.id}" type="button" onclick=""
                            class="comprar">COMPRAR</button>
                        </div>
                </div>`
    
containerComprarItems.appendChild(card);

let boton = document.getElementById( `Comprar${calzado2.id}`);
boton.onclick= () => agregarAlcarrito(calzado2.id);

}
}

//STORAGE

function chequearCarritoStorage (){
    let contenidoEnStorage= JSON.parse(localStorage.getItem("carritoEnStorage"));
  //  console.log("contenido en chequear Carrito en ls", contenidoEnStorage);


    if(contenidoEnStorage){
        let array=[];
        for(let i = 0 ; i < contenidoEnStorage.length; i++ ) {
            let calzado2 = new Calzado2(
                contenidoEnStorage[i],
                contenidoEnStorage[i].cantidad);
                calzado2.ultimoPrecioTotal();
                array.push(calzado2);

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
        carrito.push(new Calzado2(calzados2[idProducto]));
    }
    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
    descripcionTabla(carrito);
}

function eliminarDeCarrito(id){
    let calzado2 = carrito.find((calzado2) => calzado2.id === id);
    
    let indice = carrito.findIndex((element) => {
        //if (element.id === calzado.id){
         //   return true;

         //AGREGUE OPERADOR TERNARIO.
        let indice = element.id === calzado2.id ? true : false ;
            
        
    });

    if (calzado2.cantidad >1){
        console.log(`cantidad disponible:${calzado2.cantidad}`);
     
        carrito[indice].quitarProducto();
        carrito[indice].ultimoPrecioTotal();

    } else{
        carrito.splice(indice,1);

    }
    
    descripcionTabla(carrito);
    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
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

for (let calzado2 of array){
    let item = document.createElement("div");
    item.innerHTML=`
                <tr>
                <td class="imag "><img src="${calzado2.img}" width="100"></td>
                <td class"tipo">${calzado2.tipo}</td>
                <td class"cant">${calzado2.cantidad}</td>
                <td class="color">${calzado2.color}</td>
                <td class="precio">$${calzado2.precio}</td>
                <td class="elim"> <button id="eliminar${calzado2.id}" type="button" class="btn btn-darger"> Eliminar </button> </td>
                </tr>`;
                bodyTabla.appendChild(item);

                let borrarItem = document.getElementById(`eliminar${calzado2.id}`);
                borrarItem.addEventListener("click", ()=>{
                    eliminarDeCarrito(calzado2.id);
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
 //Contenido cargado en local Storage
 function cargarEventLis (){ document.addEventListener ('DOMContentLoaded', () =>{
    carrito= JSON.parse(localStorage.getItem('carrito')) || [] ; // USO DE OPERADOR LOGICO OR
  descripcionTabla(carrito);
  
} );
}

imprimirProductosHTML(calzados2);
carrito= chequearCarritoStorage();
descripcionTabla(carrito);











