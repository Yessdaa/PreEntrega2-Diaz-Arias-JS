document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscador")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".articulo").forEach(fruta =>{

          fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove("filtro")
            :fruta.classList.add("filtro")
      })

  }


})


const productos = [
    {nombre: "Mangas", precio: 170 },
    {nombre: "Cosplay", precio: 560 },
    {nombre: "Tazas", precio: 70 },
    {nombre: "Sudaderas", precio: 150 },
    {nombre: "Playeras", precio: 120 },
    {nombre: "Katanas", precio: 320 },
]

let carrito = [

]

let elegir = prompt("Hola, bienvenido a YessAnime, Desea comprar algun producto? si o no")
while(elegir != "si" && elegir != "no"){
alert ("Por favor ingrese si o no")
elegir= prompt ("Desea comprar algun producto? si o no")
} 
if(elegir == "si"){
    alert("Nuestra lista de productos es:")
    let nuestrosProductos = productos.map((productos)=> productos.nombre + " " + productos.precio + "$");
    alert(nuestrosProductos.join(" - "))
} else if (elegir == "no"){
    alert("Gracias por visitarnos, no dudes en volver!")
}

while(elegir != "no"){
    let productos = prompt("Agrega un producto al carrito")
    let precio = 0

    if(productos == "Mangas" || productos == "Cosplay" || productos == "Tazas" ||productos == "Sudaderas" ||productos == "Playeras"||productos == "Katanas"  ){
        switch(productos){
            case "Mangas":
                precio = 170
            break
            case "Cosplay":
                precio = 560
            break
            case "Tazas":
                precio = 70
            break
        
            case "Sudaderas":
                precio = 150
            break

            case "Katanas":
              precio = 320
          break

            case "Playeras":
                precio = 120
            default:
                break;
        }
        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

        carrito.push({productos, unidades, precio})
        console.log(carrito)
    } else {
        alert ("no tenemos ese producto, lo siento")
    }

    elegir = prompt("desea seguir commprando?")
    while(elegir === ("no")){
        alert("Gracias por su compra, podra encontrar el valor final en la proxima ventana")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar por su compra es: ${total} . Hasta luego`)