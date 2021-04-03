const boton = document.querySelector(".nav-toggle")
const botonInterno = document.querySelector(".fa-bars")
const lista = document.querySelector("#lista")
const botonSide = document.querySelector(".side-toggle")
const side = document.querySelector( ".sidebar" )
const botonCerrar = document.querySelector( ".cerrar" )
const botonCerrarModal = document.querySelector( ".cerrarModal" )
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

const botonMostrarModal = document.querySelector( ".mostrar-modal" )


boton.addEventListener( 'click', function(){
   lista.classList.toggle("show")
   botonInterno.classList.toggle("girar")
} )

botonSide.addEventListener( 'click', function(){
    side.classList.toggle("desplegar")
} )

botonCerrar.addEventListener( 'click', function(){
    side.classList.remove("desplegar")
} )

botonMostrarModal.addEventListener( 'click', function(){
    modal.classList.add( "mostrarModal" )
    overlay.classList.add( "mostrarOverlay" )
} )


botonCerrarModal.addEventListener( 'click', function(){
    modal.classList.remove( "mostrarModal" )
    overlay.classList.remove( "mostrarOverlay" )
} )