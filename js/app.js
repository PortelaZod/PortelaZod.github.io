let avaliacoes = [
    {
        nome: 'Jefferson Portela Pereira',
        nota: '★★★★★',
        comentario: 'Ótimo ambiente, e profissional de responsa.',
        img_perfil: './assets/imagens_perfil_avaliações/jefferson_portela.jpg'
    },

    {
        nome: 'Sandro Mario',
        nota: '★★★★★',
        comentario: 'O Ícaro foi gente finíssima comigo desde que o procurei para conversar sobre o que eu gostaria de fazer, bastante atencioso, procurou fazer a tatuagem realmente da maneira me deixasse satisfeito com o resultado !',
        img_perfil: './assets/imagens_perfil_avaliações/Sandro.png'
    },

    {
        nome: 'Alessandra Sales',
        nota: '★★★★★',
        comentario: 'Ótimo atendimento, já fiz 3 tatto com ele. Ambiente climatizado e higienizado, ótimo atendimento e traços finos de qualidade. Recomendo muito para quem quer fazer uma tatto Top!!',
        img_perfil: './assets/imagens_perfil_avaliações/alessandra.png'
    },

    {
        nome: 'Thaynah Pereira',
        nota: '★★★★★',
        comentario: 'O tatuador é super profissional, me senti confortável, tive uma ótima experiência nesse estúdio, o ambiente é agradável, super recomendo! Espero voltar mais vazes.',
        img_perfil: './assets/imagens_perfil_avaliações/thayna.png'
    },

    {
        nome: 'João Pedro Tavares',
        nota: '★★★★★',
        comentario: 'Ótimo atendimento, já fiz 3 tatto com ele. Ambiente climatizado e higienizado,  com um cara carismático demais.',
        img_perfil: './assets/imagens_perfil_avaliações/joao.png'
    }

]

avaliacoes.forEach(e=>{
    let modelo = document.querySelector('.cards_avaliacao_modelo').cloneNode(true)
    document.querySelector('.area_avaliacoes').append(modelo)
    modelo.querySelector('.user_img').src= e.img_perfil
    modelo.querySelector('.user_nome').innerHTML= e.nome
    modelo.querySelector('.user_comentario').innerHTML= e.comentario
})//Avaliaçoes Clientes



let video = document.querySelector('video')
    video.play()
    
    