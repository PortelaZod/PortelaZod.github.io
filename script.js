const modalFrame=document.querySelector(".modal-frame")//frame modal
const imgModal=document.querySelector(".modal-frame img")//imagem do frame modal
const Mfv=document.querySelector(".modal-frameVideo")//frame video modal
const Mv=document.querySelector(".modal-frameVideo video")//video do frame modal
const whatsBtn=document.querySelector(".whats-btn")//botão do whats
const loader=document.querySelector(".container-loader").style//frame de carregamento da pagina
const autoplay= document.querySelector(".autoplay video")//regra pra dar autoplay nos videos
const autoplayModal=document.querySelector(".modal-frameVideo video")
//--------------------------------------
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
//Galeria Modal

//---------------------------------------
function abrirVideo(x){
    Mfv.style.visibility="visible"
    Mfv.style.transform="scale(1)"
    whatsBtn.style.display="none"
    Mv.src=(x)
    autoplayModal.play()
}

function fecharVideo(){
    Mfv.style.visibility="hidden"
    Mfv.style.transform="scale(0)"
    whatsBtn.style.display="flex"
}
//video modal

function load(){
    loader.display="none";
    autoplay.play()
}
//loading frame

