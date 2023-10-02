document.addEventListener("DOMContentLoaded", () => {
    const detalleProductos = document.getElementById("detalle-productos");
  
    //.id del producto
    const urlParams = new URLSearchParams(window.location.search);
    const idProducto = urlParams.get("id");
  
    const losproductos = JSON.parse(localStorage.getItem("productos"));
  
    
    //Busqueda de producto por ID
    const prodElegido = losproductos.productos.find(
      (tomaProductos) => tomaProductos.id == idProducto
      );

   
    if (prodElegido) {
     
      const boxProductos = document.createElement("div");
      boxProductos.classList.add("imgDetalle");
      boxProductos.innerHTML = `    
      <img src= ${prodElegido.imagen} class=imgSize>`;

            detalleProductos.appendChild(boxProductos);


            const boximag = document.createElement("div");
            boximag.classList.add("detalle-producto");
            boximag.innerHTML = `
            <h2 class=descrpip>${prodElegido.nombre}</h2>
            <p class=descrpDeta  > ${prodElegido.descripcion}</p>
            <p class=precioPro  > ${prodElegido.precio}</p>`;
      
                  detalleProductos.appendChild(boximag);            

              
  }})
  