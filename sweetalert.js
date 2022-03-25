Swal.fire({html: '<b class="orange">Bienvenido a Calzado infantil LYP </b>',
 background:'#EACD2E',
 width:'50%',
 padding:'2rem',
 allowOutsideClick:'true',
  });

 const btnn = document.querySelectorAll('.comprar');

 btnn.forEach(comprar=>{
   comprar.addEventListener('click',() =>{
     Swal.fire({ title:"Elegiste Calzados LYP",background:'#EACD2E', text:" Gracias por tu compra",})
   })
 });

  const buttom = document.querySelectorAll('.btn');

  buttom.forEach(btn=>{
    btn.addEventListener('click',() =>{
      Swal.fire({html:'<b class="white">Vaciaste tu carrito de compra</b>', padding:'1rem',background:'rgb(221, 53, 90)'})
    })
  });
  