const modalFrame=document.querySelector(".modal-frame")
const imgModal=document.querySelector(".modal-frame img")
const Mfv=document.querySelector(".modal-frameVideo")
const Mv=document.querySelector(".modal-frameVideo video")
const whatsBtn=document.querySelector(".whats-btn")
const loader=document.querySelector(".container-loader").style

function abrirModal(src){
    modalFrame.style.visibility="visible"
    imgModal.src=(src)
    whatsBtn.style.display="none"
    modalFrame.style.transform="scale(1)"
}

function fecharModal(){
    modalFrame.style.visibility="hidden"
    modalFrame.style.transform="scale(0)"
    whatsBtn.style.display="flex"
}
// Modal Efect


function abrirVideo(x){
    Mfv.style.visibility="visible"
    Mfv.style.transform="scale(1)"
    whatsBtn.style.display="none"
    Mv.src=(x)
}

function fecharVideo(){
    Mfv.style.visibility="hidden"
    Mfv.style.transform="scale(0)"
    whatsBtn.style.display="flex"
}

function load(){
    loader.display="none";
}

