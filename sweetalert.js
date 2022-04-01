
const btnn = document.querySelectorAll('.comprar');

 btnn.forEach(comprar=>{
   comprar.addEventListener('click',() =>{
     Swal.fire({ title:"Elegiste Calzados LYP",background:'#EACD2E', text:" Gracias por preferirnos",})
   })
 });

  const buttom = document.querySelectorAll('.btn');

  buttom.forEach(btn=>{
    btn.addEventListener('click',() =>{
      Swal.fire({html:'<b class="white">Vaciaste tu carrito de compra</b>', padding:'1rem',background:'rgb(221, 53, 90)'})
    })
  });
  
  const BTNN = document.querySelectorAll('.comprarr');

 BTNN.forEach(comprarr=>{
   comprarr.addEventListener('click',() =>{
     Swal.fire({ title:"ELIGE UN CALZADO INFANTIL",background:'#EACD2E',})
   })
 });