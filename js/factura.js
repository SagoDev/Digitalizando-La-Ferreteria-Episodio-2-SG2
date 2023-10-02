let productos=[];
const url = "api/productos.json";

// Variante de función getJSONData. Estaban utilizando fetch en crudo, por eso
//animé a reutilizar código. 
let obtener = (url)=>{
    var resultado = {};
    return fetch(url)
    .then(respuesta => {
      if (respuesta.ok) {
        return respuesta.json();
      }else{
        throw Error(respuesta.statusText);
      }
    })
    .then((respuesta)=> {
        resultado.status = 'ok';
        resultado.data = respuesta;
          
          return resultado;
    })
    .catch((error)=> {
        resultado.status = 'error';
        resultado.data = error;
        
        return resultado;
    });
}
//Función que carga los productos a la lista desplegable
function cargarProductos(listaProductos){
    let producto = document.getElementById('producto');
    for (let elemento of listaProductos){
        producto.innerHTML+= `<option value= ${elemento.producto} -  ${elemento.precio}>${elemento.producto} -  ${elemento.precio} </option>`;
    }
}

function agregarALista(){

    let lista = document.getElementById('lista'); //tomo el tbody
    let index = document.getElementById('producto').selectedIndex; //tomo el índice
    //del producto seleccionado.
    lista.innerHTML+= `<tr><td>${productos[index].producto} </td><td>${productos[index].precio}</td><td><img src="/img/borrar.png" width="20"></td></tr>`;
}
document.addEventListener('DOMContentLoaded',()=>{

    obtener(url).then((resultado)=>{ //Agrego los productos a la lista
        if (resultado.status === "ok"){
            console.log(resultado.data);
            productos=resultado.data
            cargarProductos(productos);
            console.log(productos)
        }
    });
    let btnAgregar = document.getElementById('agregar');
    btnAgregar.addEventListener('click',()=>{
       agregarALista();
        //alert( document.getElementById('producto').selectedIndex);
    })
})