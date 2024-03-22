const modalFrame=document.querySelector(".modal-frame")
const imgModal=document.querySelector(".modal-frame img")
const whatsBtn=document.querySelector(".whats-btn")
function abrirModal(src){
    modalFrame.style.visibility="visible"
    imgModal.src=(src)
    whatsBtn.style.display="none"
}

function fecharModal(){
    modalFrame.style.visibility="hidden"
}
// Modal Efect
