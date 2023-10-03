window.onload= function(){
  fetch("./productos.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => {   
      localStorage.setItem("productos", JSON.stringify(datos)); 
     const losproductos= JSON.parse(localStorage.getItem("productos"));
  

  const buscarbox=  document.querySelector("#box");

  if (losproductos) {
    losproductos.productos.forEach((integrales) => {

 
  const BoxPrinc = document.createElement("div");

  BoxPrinc.classList.add("estilo-prod");
 
  BoxPrinc.innerHTML = `<h2 class=estilopro>${integrales.nombre}</h2> <img class=imaId src= ${integrales.imagen} >  <p class=parra>${integrales.detalle}</p> <p class=precio>${integrales.precio}</p>`;
  

  BoxPrinc.addEventListener("click", () => {
    irDetalle(integrales);
  });

  buscarbox.appendChild(BoxPrinc);
});
}

});


// console.log(integrales);
function irDetalle(integrales) {
window.location.href = `producto.html?id=${integrales.id}`;
// console.log(integrales)


}
}


