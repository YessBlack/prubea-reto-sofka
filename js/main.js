//Modal agregar y eliminar clases para ocultar y mostrar
const btnComenzar = document.getElementById('btn_Comenzar')
const modal = document.querySelector('.modal')
const exit = document.querySelector('.btn-exit')

btnComenzar.addEventListener('click',(e)=> {
    e.preventDefault();
    modal.classList.add('modal--show')
} )

exit.addEventListener('click',()=>{
    modal.classList.remove('modal--show')
})

